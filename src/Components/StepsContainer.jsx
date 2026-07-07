import Step from "./Step";
import ProductCard from "./ProductCard";

const StepsContainer = ({
  products,
  state,
  onUpdateQuantity,
  onSetVariant,
  stepOpen,
  onToggleStep,
  onNextStep,
  selectedCounts,
}) => {
  return (
    <div className="steps-container">
      <Step
        stepNumber={1}
        title="Choose your cameras"
        icon="cameras"
        selected={
          selectedCounts[1] > 0 ? `${selectedCounts[1]} selected` : null
        }
        expanded={stepOpen === 1}
        onToggle={() => onToggleStep(1)}
        highlighted
      >
        <div className="step__product-list">
          <div className="step__product-row">
            {products.slice(0, 2).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                state={
                  state[product.id] || { selectedVariant: 0, quantities: [0] }
                }
                onUpdateQuantity={onUpdateQuantity}
                onSetVariant={onSetVariant}
              />
            ))}
          </div>
          <div className="step__product-row">
            {products.slice(2, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                state={
                  state[product.id] || { selectedVariant: 0, quantities: [0] }
                }
                onUpdateQuantity={onUpdateQuantity}
                onSetVariant={onSetVariant}
              />
            ))}
          </div>
          {products[4] && (
            <div className="step__product-single">
              <ProductCard
                product={products[4]}
                state={
                  state[products[4].id] || {
                    selectedVariant: 0,
                    quantities: [0],
                  }
                }
                onUpdateQuantity={onUpdateQuantity}
                onSetVariant={onSetVariant}
              />
            </div>
          )}
        </div>
        <button className="step__next-button" onClick={onNextStep}>
          <span className="step__next-text">Next: Choose your plan</span>
        </button>
      </Step>
      <Step
        stepNumber={2}
        title="Choose your plan"
        icon="plan"
        expanded={stepOpen === 2}
        onToggle={() => onToggleStep(2)}
      />
      <Step
        stepNumber={3}
        title="Choose your sensors"
        icon="sensors"
        expanded={stepOpen === 3}
        onToggle={() => onToggleStep(3)}
      />
      <Step
        stepNumber={4}
        title="Add extra protection"
        icon="protection"
        expanded={stepOpen === 4}
        onToggle={() => onToggleStep(4)}
      />
    </div>
  );
};

export default StepsContainer;
