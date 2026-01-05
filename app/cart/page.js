'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { useCart } from "../../components/CartProvider";
import { formatPrice } from "../../lib/cart";

const initialFormState = {
  name: "",
  phone: "",
  address: "",
};

export default function CartPage() {
  const {
    items,
    subtotal,
    delivery,
    total,
    setQuantity,
    removeItem: removeItemFromCart,
    clearCart,
    storeOrder,
    customerNotifications,
    markCustomerNotificationRead,
  } = useCart();
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [orderFeedback, setOrderFeedback] = useState(null);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const hasItems = items.length > 0;
  const orderSummary = useMemo(() => {
    return {
      subtotal: formatPrice(subtotal),
      deliveryLabel: "Free",
      total: formatPrice(total),
    };
  }, [subtotal, total]);

  const isPhoneValid = (value) => /^[0-9+\-()\s]{7,15}$/.test(value.trim());

  const validateForm = () => {
    const nextErrors = {};
    if (!form.name.trim()) {
      nextErrors.name = "Full name is required.";
    }
    if (!form.phone.trim()) {
      nextErrors.phone = "Phone number is required.";
    } else if (!isPhoneValid(form.phone)) {
      nextErrors.phone = "Please provide a valid phone number.";
    }
    if (!form.address.trim()) {
      nextErrors.address = "Complete address is required.";
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0 && hasItems;
  };

  const handleFieldChange = (field) => (event) => {
    setOrderFeedback(null);
    setForm((previous) => ({ ...previous, [field]: event.target.value }));
    if (errors[field]) {
      setErrors((previous) => {
        const clone = { ...previous };
        delete clone[field];
        return clone;
      });
    }
  };

  const adjustQuantity = (id, delta) => {
    const target = items.find((item) => item.id === id);
    if (!target) {
      return;
    }
    const nextQuantity = target.quantity + delta;
    setQuantity(id, nextQuantity);
    setOrderFeedback(null);
  };

  const handleOrder = (event) => {
    event.preventDefault();
    setSubmitAttempted(true);
    if (!validateForm()) {
      return;
    }

    const draft = {
      customer: {
        name: form.name.trim(),
        phone: form.phone.trim(),
        address: form.address.trim(),
      },
      items: items.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totals: {
        subtotal,
        delivery,
        total,
      },
    };

    try {
      const orderRecord = storeOrder(draft);
      clearCart();
      setForm(initialFormState);
      setErrors({});
      setOrderFeedback({
        message: "Thank you! Your order has been placed successfully.",
        orderId: orderRecord.id,
        orderReference: orderRecord.reference,
        status: orderRecord.status,
        deliveryMessage: orderRecord.deliveryMessage,
      });
      setSubmitAttempted(false);
    } catch (error) {
      console.error("Failed to store order", error);
      setOrderFeedback({
        message: "We could not process your order. Please try again.",
        orderId: null,
        status: "error",
      });
    }
  };

  const handleRemove = (id) => {
    removeItemFromCart(id);
    setOrderFeedback(null);
  };

  const showCartError = submitAttempted && !hasItems;

  const unreadCustomerNotifications = customerNotifications.filter((notification) => notification.status === "unread");

  const isFormValid = form.name.trim() && form.phone.trim() && form.address.trim() && isPhoneValid(form.phone) && hasItems;

  return (
    <main className="cart-page">
      <section className="cart-page__header">
        <h1>Your Cart</h1>
        <p>Review your selections, adjust quantities, and complete your order.</p>
      </section>

      {!hasItems ? (
        <div className="cart-page__empty">
          <p>Your cart is currently empty.</p>
          <div className="cart-page__empty-actions">
            <Link href="/sneakers" className="cart-page__empty-link">Browse Sneakers</Link>
            <Link href="/perfumes" className="cart-page__empty-link">Browse Perfumes</Link>
          </div>
        </div>
      ) : null}

      <div className="cart-page__grid">
        <section className="cart-page__items" aria-live="polite">
          {items.map((item) => (
            <article key={item.id} className="cart-item">
              <div className="cart-item__media" aria-hidden="true">
                {item.image ? <img src={item.image} alt="" /> : <span>No Image</span>}
              </div>
              <div className="cart-item__details">
                <h2>{item.name}</h2>
                <p className="cart-item__price">{formatPrice(item.price)}</p>
                <div className="cart-item__controls">
                  <div className="cart-item__quantity" role="group" aria-label={`Adjust quantity for ${item.name}`}>
                    <button type="button" onClick={() => adjustQuantity(item.id, -1)} aria-label={`Reduce ${item.name} quantity`}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => adjustQuantity(item.id, 1)} aria-label={`Increase ${item.name} quantity`}>
                      +
                    </button>
                  </div>
                  <button type="button" className="cart-item__remove" onClick={() => handleRemove(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
              <div className="cart-item__total" aria-label="Line total">
                {formatPrice(item.price * item.quantity)}
              </div>
            </article>
          ))}
        </section>

        <aside className="cart-page__summary" aria-label="Order summary">
          <div className="cart-summary">
            <h2>Summary</h2>
            <dl>
              <div className="cart-summary__row">
                <dt>Subtotal</dt>
                <dd>{orderSummary.subtotal}</dd>
              </div>
              <div className="cart-summary__row">
                <dt>Delivery</dt>
                <dd>{orderSummary.deliveryLabel}</dd>
              </div>
              <div className="cart-summary__row cart-summary__row--total">
                <dt>Total</dt>
                <dd>{orderSummary.total}</dd>
              </div>
            </dl>
          </div>

          <form className="checkout-form" onSubmit={handleOrder} noValidate>
            <h2>Checkout</h2>
            {showCartError ? <p className="checkout-form__error" role="alert">Add at least one product before placing an order.</p> : null}
            {orderFeedback ? (
              <p className="checkout-form__success" role="status">
                {orderFeedback.message}
                {orderFeedback.orderReference ? <span>{orderFeedback.orderReference}</span> : null}
                {!orderFeedback.orderReference && orderFeedback.orderId ? <span>Reference: {orderFeedback.orderId}</span> : null}
                {orderFeedback.deliveryMessage ? <span>Status: {orderFeedback.status?.toUpperCase()}</span> : null}
                {orderFeedback.deliveryMessage ? <span>{orderFeedback.deliveryMessage}</span> : null}
              </p>
            ) : null}
            {unreadCustomerNotifications.length > 0 ? (
              <div className="cart-notifications" role="status" aria-live="polite">
                {unreadCustomerNotifications.map((notification) => (
                  <div key={notification.id} className="cart-notifications__item">
                    <div className="cart-notifications__meta">
                      <strong>{notification.orderReference || `Order ${notification.orderId}`}</strong>
                      <span>{new Date(notification.createdAt).toLocaleString()}</span>
                    </div>
                    <p>{notification.message}</p>
                    <button type="button" onClick={() => markCustomerNotificationRead(notification.id)}>
                      Dismiss
                    </button>
                  </div>
                ))}
              </div>
            ) : null}
            <label className="checkout-form__field">
              Full Name
              <input type="text" value={form.name} onChange={handleFieldChange("name")} required />
              {errors.name ? <span className="checkout-form__error">{errors.name}</span> : null}
            </label>
            <label className="checkout-form__field">
              Phone Number
              <input type="tel" value={form.phone} onChange={handleFieldChange("phone")} required />
              {errors.phone ? <span className="checkout-form__error">{errors.phone}</span> : null}
            </label>
            <label className="checkout-form__field">
              Delivery Address
              <textarea value={form.address} onChange={handleFieldChange("address")} rows={4} required />
              {errors.address ? <span className="checkout-form__error">{errors.address}</span> : null}
            </label>
            <button type="submit" className="checkout-form__submit" disabled={!isFormValid}>
              Place Order
            </button>
          </form>
        </aside>
      </div>
    </main>
  );
}
