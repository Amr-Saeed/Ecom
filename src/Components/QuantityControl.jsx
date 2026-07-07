import { Minus, Plus } from "lucide-react";

const QuantityControl = ({ quantity, onDecrease, onIncrease, min = 0 }) => {
  const isMinusDisabled = quantity <= min;

  return (
    <div className="quantity-control">
      <button
        className={`quantity-control__btn ${isMinusDisabled ? "quantity-control__btn--disabled" : ""}`}
        onClick={() => !isMinusDisabled && onDecrease()}
        disabled={isMinusDisabled}
        type="button"
        aria-label="Decrease quantity"
      >
        <Minus size={8} color="#525963" />
      </button>
      <span className="quantity-control__value">{quantity}</span>
      <button
        className="quantity-control__btn"
        onClick={onIncrease}
        type="button"
        aria-label="Increase quantity"
      >
        <Plus size={8} color="#525963" />
      </button>
    </div>
  );
};

export default QuantityControl;
