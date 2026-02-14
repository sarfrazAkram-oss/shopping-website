import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

const DEFAULT_IMAGE = "/images/shoes/shoes4.jfif";

function resolveAction(product, action) {
  if (!action) {
    return { type: "cart", label: "Add to Cart" };
  }

  if (typeof action === "string") {
    const base = action.trim().toLowerCase();
    if (base === "add to cart") {
      return { type: "cart", label: action };
    }
    return { type: "link", label: action, href: "#" };
  }

  return action;
}

export default function ProductCard({ product, action, fallbackImage, source = "catalog", className = "" }) {
  const { name, price, image } = product;
  const resolvedAction = resolveAction(product, action);
  const buttonLabel = resolvedAction.label || "Add to Cart";
  const displayImage = image || fallbackImage || DEFAULT_IMAGE;

  return (
    <article className={`product-card ${className}`.trim()}>
      <div className="product-card__media" role="presentation">
        <div className="product-card__media-surface">
          <Image
            src={displayImage}
            alt={name}
            fill
            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 40vw, 260px"
            priority={false}
            className="product-card__image"
          />
        </div>
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title" title={name}>
          {name}
        </h3>
        {price ? <p className="product-card__price">{price}</p> : null}
        <div className="product-card__spacer" aria-hidden="true" />
        {resolvedAction.type === "cart" ? (
          <AddToCartButton
            product={product}
            fallbackImage={fallbackImage || image}
            source={source}
            className="btn btn-dark product-card__cta"
          >
            {buttonLabel}
          </AddToCartButton>
        ) : resolvedAction.type === "link" ? (
          <Link href={resolvedAction.href || "#"} className="btn btn-dark product-card__cta">
            {buttonLabel}
          </Link>
        ) : resolvedAction.type === "button" ? (
          <button type="button" className="btn btn-dark product-card__cta" onClick={resolvedAction.onClick}>
            {buttonLabel}
          </button>
        ) : null}
      </div>
    </article>
  );
}
