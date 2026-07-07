import { useState, useEffect, useCallback } from "react";
import "../Styles/CheckoutPage.css";
import StepsContainer from "../Components/StepsContainer";
import OrderSummary from "../Components/OrderSummary";

const SAVE_KEY = "wyzeSystem";
const SAVE_VERSION = 1;

const CheckoutPage = () => {
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({});
  const [stepOpen, setStepOpen] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched products:", data);
        setProducts(data);

        const savedRaw = JSON.parse(localStorage.getItem(SAVE_KEY));
        const saved =
          savedRaw && savedRaw._version === SAVE_VERSION ? savedRaw : null;
        console.log("Saved state (versioned):", saved);

        const init = {};
        data.forEach((prod) => {
          const savedProd = saved?.[prod.id];
          const defaultQty = new Array(prod.variants.length).fill(0);

          if (savedProd) {
            init[prod.id] = {
              selectedVariant: savedProd.selectedVariant ?? 0,
              quantities: savedProd.quantities || defaultQty,
            };
          } else {
            if (prod.id === "cam-v4") {
              defaultQty[0] = 1;
            } else if (prod.id === "cam-pan-v3") {
              defaultQty[0] = 1;
            } else if (prod.id === "motion-sensor") {
              defaultQty[0] = 1;
            } else if (prod.id === "sense-hub") {
              defaultQty[0] = prod.minQuantity || 1;
            } else if (prod.id === "microsd") {
              defaultQty[0] = prod.minQuantity || 1;
            }
            init[prod.id] = { selectedVariant: 0, quantities: defaultQty };
          }
        });

        if (init["microsd"] && init["microsd"].quantities[0] < 1) {
          init["microsd"].quantities[0] = 1;
          console.log("Forced microsd quantity to 1");
        }
        console.log("Initial state:", init);
        setState(init);
        setLoading(false);
      })
      .catch((err) => console.error("Failed to load products:", err));
  }, []);

  useEffect(() => {
    if (Object.keys(state).length > 0) {
      const toSave = { ...state, _version: SAVE_VERSION };
      localStorage.setItem(SAVE_KEY, JSON.stringify(toSave));
      console.log("Saved state:", toSave);
    }
  }, [state]);

  const updateQuantity = useCallback(
    (productId, variantIdx, delta) => {
      setState((prev) => {
        const prod = { ...prev[productId] };
        const newQtys = [...prod.quantities];
        const min = products.find((p) => p.id === productId)?.minQuantity || 0;
        newQtys[variantIdx] = Math.max(min, newQtys[variantIdx] + delta);
        return { ...prev, [productId]: { ...prod, quantities: newQtys } };
      });
    },
    [products],
  );

  const setSelectedVariant = useCallback((productId, idx) => {
    setState((prev) => ({
      ...prev,
      [productId]: { ...prev[productId], selectedVariant: idx },
    }));
  }, []);

  const handleNextStep = () => {
    setStepOpen((prev) => Math.min(prev + 1, 4));
  };

  const handleToggleStep = (step) => {
    setStepOpen((prev) => (prev === step ? null : step));
  };

  const handleSave = useCallback(() => {
    const toSave = { ...state, _version: SAVE_VERSION };
    localStorage.setItem(SAVE_KEY, JSON.stringify(toSave));
    alert("Your system has been saved.");
  }, [state]);

  const stepProductMap = {
    1: [
      "cam-v4",
      "cam-pan-v3",
      "floodlight-v2",
      "duo-doorbell",
      "battery-cam-pro",
    ],
    2: [],
    3: ["motion-sensor", "sense-hub"],
    4: ["microsd"],
  };

  const selectedCounts = {};
  for (let s = 1; s <= 4; s++) {
    const ids = stepProductMap[s];
    selectedCounts[s] = ids.filter((id) =>
      state[id]?.quantities?.some((q) => q > 0),
    ).length;
  }
  console.log("Selected counts:", selectedCounts);

  const orderLines = [];
  products.forEach((prod) => {
    const prodState = state[prod.id];
    if (!prodState) return;
    prod.variants.forEach((variant, idx) => {
      const qty = prodState.quantities[idx];
      if (qty > 0) {
        orderLines.push({
          key: `${prod.id}-${idx}`,
          productId: prod.id,
          variantIdx: idx,
          name: prod.name,
          color: variant.color,
          image: variant.variantImage || prod.summaryImage || prod.image,
          priceOld: variant.priceOld,
          priceNew: variant.priceNew,
          quantity: qty,
          category: prod.category,
        });
      }
    });
  });

  if (!orderLines.find((line) => line.productId === "microsd")) {
    const microState = state["microsd"];
    if (microState) {
      const qty = microState.quantities[0] || 1;
      const prod = products.find((p) => p.id === "microsd");
      if (prod) {
        orderLines.push({
          key: "microsd-0",
          productId: "microsd",
          variantIdx: 0,
          name: prod.name,
          color: null,
          image: prod.image,
          priceOld: null,
          priceNew: prod.variants[0].priceNew,
          quantity: qty,
          category: prod.category,
        });
        console.log("Fallback: added microsd to order lines");
      }
    }
  }
  console.log("Final order lines:", orderLines);

  const planPriceOld = 12.99;
  const planPriceNew = 9.99;
  const shippingOld = 5.99;
  const shippingNew = 0;

  const subtotalOld = orderLines.reduce(
    (sum, line) => sum + (line.priceOld || line.priceNew) * line.quantity,
    0,
  );
  const subtotalNew = orderLines.reduce(
    (sum, line) => sum + line.priceNew * line.quantity,
    0,
  );
  const totalOld = subtotalOld + planPriceOld + shippingOld;
  const totalNew = subtotalNew + planPriceNew + shippingNew;
  const savings = totalOld - totalNew;

  if (loading) {
    return <div className="checkout-page">Loading products…</div>;
  }

  return (
    <div className="checkout-page">
      <div className="checkout-layout">
        <StepsContainer
          products={products.filter((p) => stepProductMap[1].includes(p.id))}
          state={state}
          onUpdateQuantity={updateQuantity}
          onSetVariant={setSelectedVariant}
          stepOpen={stepOpen}
          onToggleStep={handleToggleStep}
          onNextStep={handleNextStep}
          selectedCounts={selectedCounts}
        />
        <OrderSummary
          orderLines={orderLines}
          planPriceOld={planPriceOld}
          planPriceNew={planPriceNew}
          shippingOld={shippingOld}
          shippingNew={shippingNew}
          satisfactionImg="/Satisfaction.png"
          totalOld={totalOld}
          totalNew={totalNew}
          savings={savings}
          onUpdateQuantity={updateQuantity}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
