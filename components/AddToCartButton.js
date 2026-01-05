'use client';

import { useState } from "react";
import { buildCartItem } from "../lib/cart";
import { useCart } from "./CartProvider";

export default function AddToCartButton({
  product,
  className,
  children,
  fallbackImage,
  source,
  disabled,
  onAdded,
}) {
  const { addItem, openCart, initialized } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const isOutOfStock = product && Object.prototype.hasOwnProperty.call(product, "inStock") && product.inStock === false;
  const resolvedDisabled = disabled || isOutOfStock || !product || !initialized;

  const handleAdd = () => {
    if (resolvedDisabled || isProcessing) {
      return;
    }
    try {
      setIsProcessing(true);
      const item = buildCartItem(product, { fallbackImage, source });
      addItem(item);
      openCart();
      if (onAdded) {
        onAdded(item);
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button type="button" className={className} onClick={handleAdd} disabled={resolvedDisabled || isProcessing}>
      {children || "Add to Cart"}
    </button>
  );
}
