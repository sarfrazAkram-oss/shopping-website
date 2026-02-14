"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

const DEFAULT_IMAGE = "/images/shoes/shoes4.jfif";

const DEFAULT_SNEAKER_SIZES = [
  { value: "6", inStock: true },
  { value: "7", inStock: true },
  { value: "8", inStock: true },
  { value: "9", inStock: true },
  { value: "10", inStock: true },
];

const DEFAULT_SNEAKER_COLORS = [
  { value: "Black", swatch: "#222222", inStock: true },
  { value: "White", swatch: "#f5f5f5", inStock: true },
  { value: "Navy", swatch: "#223a63", inStock: true },
  { value: "Olive", swatch: "#5e6f4f", inStock: false },
];

function toTitle(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ");
}

function normalizeSizeOptions(sizes) {
  if (!Array.isArray(sizes) || sizes.length === 0) {
    return DEFAULT_SNEAKER_SIZES;
  }
  return sizes.map((entry) => {
    if (typeof entry === "string" || typeof entry === "number") {
      return { value: String(entry), inStock: true };
    }
    return {
      value: String(entry?.value ?? ""),
      inStock: entry?.inStock !== false,
    };
  }).filter((entry) => entry.value);
}

function normalizeColorOptions(colors) {
  if (!Array.isArray(colors) || colors.length === 0) {
    return DEFAULT_SNEAKER_COLORS;
  }
  return colors.map((entry) => {
    if (typeof entry === "string") {
      return {
        value: toTitle(entry),
        swatch: null,
        inStock: true,
      };
    }
    return {
      value: toTitle(entry?.value),
      swatch: entry?.swatch || null,
      inStock: entry?.inStock !== false,
    };
  }).filter((entry) => entry.value);
}

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
  const isSneakerProduct = product?.category === "sneakers" || String(source || "").startsWith("sneakers");
  const sizeOptions = normalizeSizeOptions(product?.sizes);
  const colorOptions = normalizeColorOptions(product?.colors);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [showSelectionWarning, setShowSelectionWarning] = useState(false);

  const requiresVariantSelection = resolvedAction.type === "cart" && isSneakerProduct;
  const canAddSneakerToCart = !requiresVariantSelection || (selectedSize && selectedColor);

  const handleAddAttemptCapture = () => {
    if (!requiresVariantSelection) {
      return;
    }
    if (!selectedSize || !selectedColor) {
      setShowSelectionWarning(true);
    }
  };

  const selectedProduct = useMemo(() => {
    if (!requiresVariantSelection) {
      return product;
    }
    return {
      ...product,
      selectedSize,
      selectedColor,
    };
  }, [product, requiresVariantSelection, selectedColor, selectedSize]);

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
        {requiresVariantSelection ? (
          <div className="product-card__variants" aria-label={`${name} options`}>
            <div className="product-card__variant-group">
              <span className="product-card__variant-label">Size</span>
              <div className="product-card__size-list" role="group" aria-label={`Select size for ${name}`}>
                {sizeOptions.map((sizeOption) => {
                  const isSelected = selectedSize === sizeOption.value;
                  return (
                    <button
                      key={sizeOption.value}
                      type="button"
                      className={isSelected ? "product-card__size-btn is-selected" : "product-card__size-btn"}
                      disabled={!sizeOption.inStock}
                      aria-pressed={isSelected}
                      onClick={() => {
                        setSelectedSize(sizeOption.value);
                        if (selectedColor) {
                          setShowSelectionWarning(false);
                        }
                      }}
                    >
                      {sizeOption.value}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="product-card__variant-group">
              <span className="product-card__variant-label">Color</span>
              <div className="product-card__color-list" role="group" aria-label={`Select color for ${name}`}>
                {colorOptions.map((colorOption) => {
                  const isSelected = selectedColor === colorOption.value;
                  const style = colorOption.swatch ? { "--swatch": colorOption.swatch } : undefined;
                  return (
                    <button
                      key={colorOption.value}
                      type="button"
                      className={isSelected ? "product-card__color-btn is-selected" : "product-card__color-btn"}
                      style={style}
                      disabled={!colorOption.inStock}
                      aria-label={`Select ${colorOption.value}`}
                      aria-pressed={isSelected}
                      title={colorOption.value}
                      onClick={() => {
                        setSelectedColor(colorOption.value);
                        if (selectedSize) {
                          setShowSelectionWarning(false);
                        }
                      }}
                    >
                      <span className="product-card__color-swatch" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
            </div>
            {showSelectionWarning && !canAddSneakerToCart ? (
              <p className="product-card__warning" role="alert">Please select size and color.</p>
            ) : null}
          </div>
        ) : null}
        <div className="product-card__spacer" aria-hidden="true" />
        {resolvedAction.type === "cart" ? (
          <div className="product-card__cta-wrap" onClickCapture={handleAddAttemptCapture}>
            <AddToCartButton
              product={selectedProduct}
              fallbackImage={fallbackImage || image}
              source={source}
              className="btn btn-dark product-card__cta"
              disabled={!canAddSneakerToCart}
              onAdded={() => {
                setShowSelectionWarning(false);
              }}
            >
              {buttonLabel}
            </AddToCartButton>
          </div>
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
