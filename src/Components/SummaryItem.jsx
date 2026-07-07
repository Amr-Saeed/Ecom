import QuantityControl from "./QuantityControl";

const SummaryItem = ({
  imageSrc,
  name,
  baseOldPrice = 0,
  baseNewPrice,
  quantity,
  onIncrease,
  onDecrease,
  min = 0,
}) => {
  const displayOldPrice = (
    quantity === 0 ? baseOldPrice : baseOldPrice * quantity
  ).toFixed(2);
  const displayNewPrice = (
    quantity === 0 ? baseNewPrice : baseNewPrice * quantity
  ).toFixed(2);
  const isFree = baseNewPrice === 0 && quantity > 0;

  return (
    <div className="summary-item">
      <div className="summary-item__details">
        {imageSrc && (
          <img src={imageSrc} alt={name} className="summary-item__image" />
        )}
        <span className="summary-item__name">{name}</span>
      </div>
      <QuantityControl
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        min={min}
      />
      <div className="summary-item__price">
        {baseOldPrice > 0 && (
          <span className="summary-item__old-price">${displayOldPrice}</span>
        )}
        <span className="summary-item__new-price">
          {isFree ? "FREE" : `$${displayNewPrice}`}
        </span>
      </div>
    </div>
  );
};

export default SummaryItem;
