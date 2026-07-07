import SummaryItem from "./SummaryItem";
import WyzeCamIcon from "../Icons/WyzeCamIcon";

const OrderSummary = ({
  orderLines,
  planPriceOld,
  planPriceNew,
  shippingOld,
  satisfactionImg,
  totalOld,
  totalNew,
  savings,
  onUpdateQuantity,
  onSave,
}) => {
  // Group lines by category
  const grouped = orderLines.reduce((acc, line) => {
    const cat = line.category || "Other";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(line);
    return acc;
  }, {});

  return (
    <div className="order-summary">
      <span className="order-summary__header-title">Review</span>
      <div className="order-summary__body">
        <div className="order-summary__description">
          <span className="order-summary__title">Your security system</span>
          <span className="order-summary__subtitle">
            Review your personalized protection system designed to keep what
            matters most safe.
          </span>
        </div>

        <div className="order-summary__items">
          {Object.entries(grouped).map(([category, lines]) => (
            <div key={category} className="order-summary__category">
              <span className="order-summary__category-title">{category}</span>
              <div className="order-summary__category-items">
                {lines.map((line) => (
                  <SummaryItem
                    key={line.key}
                    imageSrc={line.image}
                    name={
                      line.color ? `${line.name} (${line.color})` : line.name
                    }
                    baseOldPrice={line.priceOld}
                    baseNewPrice={line.priceNew}
                    quantity={line.quantity}
                    onIncrease={() =>
                      onUpdateQuantity(line.productId, line.variantIdx, 1)
                    }
                    onDecrease={() =>
                      onUpdateQuantity(line.productId, line.variantIdx, -1)
                    }
                    min={
                      line.productId === "sense-hub" ||
                      line.productId === "microsd" ||
                      line.productId === "motion-sensor"
                        ? 1
                        : 0
                    }
                  />
                ))}
              </div>
            </div>
          ))}

          {/* Plan */}
          <div className="order-summary__category">
            <span className="order-summary__category-title">Plan</span>
            <div className="order-summary__category-items">
              <div className="order-summary__plan-item">
                <div className="order-summary__plan-info">
                  <WyzeCamIcon width={17.62} height={21.36} />
                  <div className="order-summary__plan-name">
                    <span className="order-summary__plan-name-part">Cam </span>
                    <span className="order-summary__plan-unlimited">
                      Unlimited
                    </span>
                  </div>
                </div>
                <div className="order-summary__plan-prices">
                  <span className="order-summary__old-price">
                    ${planPriceOld}/mo
                  </span>
                  <span className="order-summary__new-price">
                    ${planPriceNew}/mo
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Fast Shipping */}
          <div className="order-summary__category">
            <div className="order-summary__shipping-item">
              <div className="order-summary__shipping-info">
                <div className="order-summary__shipping-icon-box">
                  <img
                    src="/Wyze Sense Keypad.png"
                    alt=""
                    className="order-summary__shipping-icon"
                  />
                </div>
                <span className="order-summary__shipping-text">
                  Fast Shipping
                </span>
              </div>
              <div className="order-summary__shipping-prices">
                <span className="order-summary__old-price">${shippingOld}</span>
                <span className="order-summary__new-price">FREE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-summary__total-section">
          <div className="order-summary__total-row">
            <div className="order-summary__total-details">
              <img
                src={satisfactionImg}
                alt=""
                className="order-summary__satisfaction-badge"
              />
              <div className="order-summary__price-info">
                <div className="order-summary__monthly">
                  <span>as low as $19.19/mo</span>
                </div>
                <div className="order-summary__prices">
                  <span className="order-summary__old-total">
                    ${totalOld.toFixed(2)}
                  </span>
                  <span className="order-summary__new-total">
                    ${totalNew.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="order-summary__checkout-block">
              <span className="order-summary__savings">
                Congrats! You're saving ${savings.toFixed(2)} on your security
                bundle!
              </span>
              <button
                className="order-summary__checkout-btn"
                onClick={() => alert("Proceeding to checkout...")}
              >
                <span>Checkout</span>
              </button>
            </div>
          </div>
          <span className="order-summary__save-link" onClick={onSave}>
            Save my system for later
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
