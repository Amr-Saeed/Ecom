import QuantityControl from "./QuantityControl";

const ProductCard = ({ product, state, onUpdateQuantity, onSetVariant }) => {
  const { selectedVariant, quantities } = state;
  const variant = product.variants[selectedVariant];
  const quantity = quantities[selectedVariant];
  const isSelected = quantities.some((q) => q > 0);

  const displayImage = variant.variantImage || product.image;

  return (
    <div
      className={`product-card ${isSelected ? "product-card--selected" : ""}`}
    >
      <div className="product-card__image">
        <img
          src={displayImage}
          alt={product.name}
          className="product-card__photo"
        />
        {product.badge && (
          <div className="product-card__badge">
            <span>{product.badge}</span>
          </div>
        )}
      </div>
      <div className="product-card__info">
        <div className="product-card__text">
          <span className="product-card__name">{product.name}</span>
          <span className="product-card__description">
            {product.description}{" "}
            <a href={product.learnMoreUrl} className="product-card__learn-more">
              Learn More
            </a>
          </span>
        </div>
        {product.variants.length > 1 && product.variants[0].color !== null && (
          <div className="product-card__colors">
            {product.variants.map((v, idx) => (
              <div
                key={idx}
                className={`product-card__color-option ${idx === selectedVariant ? "product-card__color-option--selected" : ""}`}
                onClick={() => onSetVariant(product.id, idx)}
              >
                <img
                  src={v.image}
                  alt={v.color}
                  className="product-card__color-img"
                />
                <span>{v.color}</span>
              </div>
            ))}
          </div>
        )}
        <div className="product-card__actions">
          <QuantityControl
            quantity={quantity}
            onIncrease={() => onUpdateQuantity(product.id, selectedVariant, 1)}
            onDecrease={() => onUpdateQuantity(product.id, selectedVariant, -1)}
            min={product.minQuantity || 0}
          />
          <div className="product-card__price">
            {variant.priceOld && (
              <span className="product-card__old-price">
                ${variant.priceOld}
              </span>
            )}
            <span className="product-card__new-price">${variant.priceNew}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
