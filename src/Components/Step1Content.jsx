import { useState } from "react";
import ProductCard from "./ProductCard";

const Step1Content = () => {
  const [qtyWyzeCamV4, setQtyWyzeCamV4] = useState(1);
  const [qtyWyzeCamPanV3, setQtyWyzeCamPanV3] = useState(1);
  const [qtyFloodlight, setQtyFloodlight] = useState(0);
  const [qtyDuoDoorbell, setQtyDuoDoorbell] = useState(0);
  const [qtyBatteryCamPro, setQtyBatteryCamPro] = useState(0);

  return (
    <>
      <div className="step__product-list">
        <div className="step__product-row">
          <ProductCard
            imageSrc="/10.jpg"
            selected
            name="Wyze Cam v4"
            baseOldPrice={35.98}
            baseNewPrice={27.98}
            quantity={qtyWyzeCamV4}
            onIncrease={() => setQtyWyzeCamV4((q) => q + 1)}
            onDecrease={() => setQtyWyzeCamV4((q) => Math.max(0, q - 1))}
            description={
              <>
                <span className="product-card__desc-text">
                  The clearest Wyze Cam ever made.{" "}
                </span>
                <a className="product-card__learn-more" href="#">
                  Learn More
                </a>
              </>
            }
            colors={
              <>
                <div className="product-card__color-option product-card__color-option--selected">
                  <img
                    alt="Wyze Cam v4 White"
                    src="/10white.jpg"
                    className="product-card__color-img"
                  />
                  <span>White</span>
                </div>
                <div className="product-card__color-option">
                  <img
                    alt="Wyze Cam v4 Grey"
                    src="/10grey.jpg"
                    className="product-card__color-img"
                  />
                  <span>Grey</span>
                </div>
                <div className="product-card__color-option">
                  <img
                    alt="Wyze Cam v4 Black"
                    src="/10black.jpg"
                    className="product-card__color-img"
                  />
                  <span>Black</span>
                </div>
              </>
            }
          />
          <ProductCard
            imageSrc="/11.jpg"
            selected
            badgeText="Save 12%"
            name="Wyze Cam Pan v3"
            baseOldPrice={19.99}
            baseNewPrice={17.49}
            quantity={qtyWyzeCamPanV3}
            onIncrease={() => setQtyWyzeCamPanV3((q) => q + 1)}
            onDecrease={() => setQtyWyzeCamPanV3((q) => Math.max(0, q - 1))}
            description={
              <>
                <span className="product-card__desc-text">
                  360° pan and 180° tilt security camera.{" "}
                </span>
                <a className="product-card__learn-more" href="#">
                  Learn More
                </a>
              </>
            }
            colors={
              <>
                <div className="product-card__color-option product-card__color-option--selected">
                  <img
                    alt="Wyze Cam Pan v3 White"
                    src="/11white.jpg"
                    className="product-card__color-img"
                  />
                  <span>White</span>
                </div>
                <div className="product-card__color-option">
                  <img
                    alt="Wyze Cam Pan v3 Black"
                    src="/11black.jpg"
                    className="product-card__color-img"
                  />
                  <span>Black</span>
                </div>
              </>
            }
          />
        </div>
        <div className="step__product-row">
          <ProductCard
            imageSrc="/12.jpg"
            badgeText="Save 22%"
            name="Wyze Cam Floodlight v2"
            baseOldPrice={89.98}
            baseNewPrice={69.98}
            quantity={qtyFloodlight}
            onIncrease={() => setQtyFloodlight((q) => q + 1)}
            onDecrease={() => setQtyFloodlight((q) => Math.max(0, q - 1))}
            description={
              <>
                <span className="product-card__desc-text">
                  2K floodlight camera with a 160° wide-angle view for your
                  garage.{" "}
                </span>
                <a className="product-card__learn-more" href="#">
                  Learn More
                </a>{" "}
              </>
            }
            colors={
              <>
                <div className="product-card__color-option">
                  <img
                    alt="Floodlight White"
                    src="/12white.jpg"
                    className="product-card__color-img"
                  />
                  <span>White</span>
                </div>
                <div className="product-card__color-option">
                  <img
                    alt="Floodlight Black"
                    src="/12black.jpg"
                    className="product-card__color-img"
                  />
                  <span>Black</span>
                </div>
              </>
            }
          />
          <ProductCard
            imageSrc="/13.jpg"
            name="Wyze Duo Cam Doorbell"
            baseNewPrice={69.98}
            quantity={qtyDuoDoorbell}
            onIncrease={() => setQtyDuoDoorbell((q) => q + 1)}
            onDecrease={() => setQtyDuoDoorbell((q) => Math.max(0, q - 1))}
            description={
              <>
                <span className="product-card__desc-text">
                  Two cameras. Two views. Double the porch protection.
                </span>
                <br />
                <span className="product-card__desc-text"> </span>
                <a className="product-card__learn-more" href="#">
                  Learn More
                </a>{" "}
              </>
            }
          />
        </div>
        <div className="step__product-single">
          <ProductCard
            imageSrc="/14.jpg"
            name="Wyze Battery Cam Pro"
            baseOldPrice={89.98}
            baseNewPrice={89.98}
            quantity={qtyBatteryCamPro}
            onIncrease={() => setQtyBatteryCamPro((q) => q + 1)}
            onDecrease={() => setQtyBatteryCamPro((q) => Math.max(0, q - 1))}
            description={
              <>
                <span className="product-card__desc-text">
                  Protect anywhere. See everything in 2.5K HDR. No power outlet
                  or electrician needed.{" "}
                </span>
                <a className="product-card__learn-more" href="#">
                  Learn More
                </a>{" "}
              </>
            }
            colors={
              <>
                <div className="product-card__color-option">
                  <img
                    alt="Battery Cam Pro White"
                    src="/14white.jpg"
                    className="product-card__color-img"
                  />
                  <span>White</span>
                </div>
                <div className="product-card__color-option">
                  <img
                    alt="Battery Cam Pro Black"
                    src="/14black.jpg"
                    className="product-card__color-img"
                  />
                  <span>Black</span>
                </div>
              </>
            }
          />
        </div>
      </div>
      <button className="step__next-button">
        <span className="step__next-text">Next: Choose your plan</span>
      </button>
    </>
  );
};

export default Step1Content;
