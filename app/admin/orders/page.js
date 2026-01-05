'use client';

import { useMemo } from "react";
import { useCart } from "../../../components/CartProvider";
import { formatPrice } from "../../../lib/cart";

export default function OrdersAdminPage() {
  const { orders, ownerNotifications, markOwnerNotificationsRead, markOrderDelivered } = useCart();

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [orders]);

  const unreadOwnerNotifications = useMemo(
    () => ownerNotifications.filter((notification) => notification.status === "unread"),
    [ownerNotifications],
  );

  const unreadOrderIds = useMemo(() => {
    return new Set(unreadOwnerNotifications.map((notification) => notification.orderId));
  }, [unreadOwnerNotifications]);

  const handleDelivery = (orderId) => {
    markOrderDelivered(orderId);
  };

  return (
    <main className="orders-page">
      <header className="orders-page__header">
        <h1>Orders Dashboard</h1>
        <p>Review recent customer orders and their details.</p>
      </header>

      {ownerNotifications.length > 0 ? (
        <section className="orders-page__alerts" aria-live="polite">
          <header>
            <h2>Notifications</h2>
            {unreadOwnerNotifications.length > 0 ? <span>{unreadOwnerNotifications.length} new</span> : <span>All caught up</span>}
          </header>
          <ul>
            {ownerNotifications.map((notification) => (
              <li key={notification.id} className={notification.status === "unread" ? "orders-page__alert is-active" : "orders-page__alert"}>
                <strong>{notification.orderReference || `Order ${notification.orderId}`}</strong>
                <span>{notification.message}</span>
                <time dateTime={notification.createdAt}>{new Date(notification.createdAt).toLocaleString()}</time>
              </li>
            ))}
          </ul>
          {unreadOwnerNotifications.length > 0 ? (
            <button type="button" className="orders-page__alerts-action" onClick={markOwnerNotificationsRead}>
              Mark all as read
            </button>
          ) : null}
        </section>
      ) : null}

      {sortedOrders.length === 0 ? (
        <p className="orders-page__empty">No orders have been placed yet.</p>
      ) : (
        <div className="orders-page__list">
          {sortedOrders.map((order) => (
            <article key={order.id} className="order-card">
              <header className="order-card__header">
                <div>
                  <h2>{order.reference}</h2>
                  <p className="order-card__meta">Customer: {order.customer.name}</p>
                  <p className="order-card__meta">
                    Placed {new Date(order.createdAt).toLocaleString()} - Updated {new Date(order.updatedAt).toLocaleString()}
                  </p>
                </div>
                <div className="order-card__summary">
                  <span className={order.status === "pending" ? "order-card__status is-pending" : "order-card__status is-delivered"}>
                    {order.status === "pending" ? "Pending" : "Delivered"}
                    {unreadOrderIds.has(order.id) ? <span className="order-card__badge">New Order</span> : null}
                  </span>
                  <strong className="order-card__total">{formatPrice(order.totals.total)}</strong>
                  {order.status === "pending" ? (
                    <button type="button" className="order-card__action" onClick={() => handleDelivery(order.id)}>
                      Mark as Delivered
                    </button>
                  ) : null}
                </div>
              </header>
              <section className="order-card__customer">
                <p><strong>Phone:</strong> {order.customer.phone}</p>
                <p><strong>Address:</strong> {order.customer.address}</p>
                <p><strong>Delivery:</strong> {order.deliveryMessage}</p>
              </section>
              <section className="order-card__items">
                <h3>Items</h3>
                <ul>
                  {order.items.map((item) => (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <span>
                        {item.quantity} x {formatPrice(item.price)} - {formatPrice(item.lineTotal)}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="order-card__history">
                <h3>Timeline</h3>
                <ul>
                  {order.history.map((entry) => (
                    <li key={entry.timestamp}>
                      <span className="order-card__history-status">{String(entry.status || "status").toUpperCase()}</span>
                      <span>{entry.message}</span>
                      <time dateTime={entry.timestamp}>{new Date(entry.timestamp).toLocaleString()}</time>
                    </li>
                  ))}
                </ul>
              </section>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
