'use client';

import { useRouter } from "next/navigation";
import { formatPrice } from "../lib/cart";
import { useCart } from "./CartProvider";

export default function CartPreview() {
  const { items, subtotal, cartCount, isCartOpen, closeCart, removeItem } = useCart();
  const router = useRouter();

  const handleConfirm = () => {
    closeCart();
    router.push("/cart");
  };

  return (
    <aside className={isCartOpen ? "cart-preview is-visible" : "cart-preview"} aria-live="polite">
      <div className="cart-preview__header">
        <h2>Cart</h2>
        <button type="button" className="cart-preview__close" onClick={closeCart} aria-label="Close cart preview">
          x
        </button>
      </div>
      <div className="cart-preview__body">
        {items.length === 0 ? (
          <p className="cart-preview__empty">Your cart is empty.</p>
        ) : (
          <ul className="cart-preview__list">
            {items.map((item) => (
              <li key={item.id} className="cart-preview__item">
                <div className="cart-preview__thumb">
                  {item.image ? <img src={item.image} alt="" /> : <span aria-hidden="true">No Image</span>}
                </div>
                <div className="cart-preview__details">
                  <span className="cart-preview__name">{item.name}</span>
                  <span className="cart-preview__meta">
                    {item.quantity} x {formatPrice(item.price)}
                  </span>
                </div>
                <button
                  type="button"
                  className="cart-preview__remove"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="cart-preview__footer">
        <div className="cart-preview__summary">
          <span>Items: {cartCount}</span>
          <span>Subtotal: {formatPrice(subtotal)}</span>
        </div>
        <button type="button" className="cart-preview__confirm" onClick={handleConfirm} disabled={items.length === 0}>
          Confirm Cart
        </button>
      </div>
    </aside>
  );
}
