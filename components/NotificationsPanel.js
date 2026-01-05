'use client';

import { useEffect, useMemo, useState } from "react";
import { useCart } from "./CartProvider";
import { formatPrice } from "../lib/cart";

export default function NotificationsPanel() {
  const {
    isNotificationsOpen,
    closeNotifications,
    ownerNotifications,
    orders,
    markOwnerNotificationsRead,
    markOrderDelivered,
  } = useCart();
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const sortedOrders = useMemo(() => {
    return [...orders].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }, [orders]);

  const latestNotificationByOrder = useMemo(() => {
    const mapping = new Map();
    ownerNotifications.forEach((notification) => {
      const existing = mapping.get(notification.orderId);
      if (!existing || new Date(notification.createdAt).getTime() > new Date(existing.createdAt).getTime()) {
        mapping.set(notification.orderId, notification);
      }
    });
    return mapping;
  }, [ownerNotifications]);

  const unreadOrderIds = useMemo(() => {
    return new Set(
      ownerNotifications
        .filter((notification) => notification.status === "unread")
        .map((notification) => notification.orderId),
    );
  }, [ownerNotifications]);

  const resolvedOrderId = useMemo(() => {
    if (!isNotificationsOpen || sortedOrders.length === 0) {
      return null;
    }
    if (selectedOrderId && sortedOrders.some((order) => order.id === selectedOrderId)) {
      return selectedOrderId;
    }
    return sortedOrders[0].id;
  }, [isNotificationsOpen, selectedOrderId, sortedOrders]);

  const selectedOrder = useMemo(() => {
    if (!resolvedOrderId) {
      return null;
    }
    return sortedOrders.find((order) => order.id === resolvedOrderId) || null;
  }, [resolvedOrderId, sortedOrders]);

  useEffect(() => {
    if (!isNotificationsOpen) {
      return;
    }
    if (ownerNotifications.some((notification) => notification.status === "unread")) {
      markOwnerNotificationsRead();
    }
  }, [isNotificationsOpen, ownerNotifications, markOwnerNotificationsRead]);

  const handleOrderSelect = (orderId) => {
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setSelectedOrderId(null);
    closeNotifications();
  };

  const handleMarkDelivered = (orderId) => {
    markOrderDelivered(orderId);
  };

  return (
    <div className={isNotificationsOpen ? "notifications-panel is-visible" : "notifications-panel"} aria-hidden={!isNotificationsOpen}>
      <button type="button" className="notifications-panel__backdrop" onClick={handleClose} aria-label="Close notifications overlay" />
      <aside className="notifications-panel__surface" role="dialog" aria-modal="true" aria-label="Order notifications">
        <div className="notifications-panel__header">
          <div>
            <h2>Order Notifications</h2>
            <p>Review customer orders and stay informed on delivery status.</p>
          </div>
          <button type="button" className="notifications-panel__close" onClick={handleClose} aria-label="Close notifications">
            x
          </button>
        </div>
        <div className="notifications-panel__content">
          <div className="notifications-panel__list" role="list">
            {sortedOrders.length === 0 ? (
              <p className="notifications-panel__empty">No orders have been placed yet.</p>
            ) : (
              sortedOrders.map((order) => {
                const notification = latestNotificationByOrder.get(order.id);
                const isSelected = resolvedOrderId === order.id;
                const statusClass = order.status === "delivered"
                  ? "notifications-panel__item-status is-complete"
                  : unreadOrderIds.has(order.id)
                    ? "notifications-panel__item-status is-new"
                    : "notifications-panel__item-status";
                const statusLabel = order.status === "delivered" ? "Delivered" : unreadOrderIds.has(order.id) ? "New" : "Pending";
                const metaLabel = notification?.createdAt
                  ? new Date(notification.createdAt).toLocaleString()
                  : new Date(order.createdAt).toLocaleString();
                const message = notification?.message || "Order received and awaiting delivery confirmation.";

                return (
                  <button
                    key={order.id}
                    type="button"
                    className={isSelected ? "notifications-panel__item is-active" : "notifications-panel__item"}
                    onClick={() => handleOrderSelect(order.id)}
                  >
                    <div className="notifications-panel__item-header">
                      <span className="notifications-panel__item-title">{order.reference}</span>
                      <span className={statusClass}>{statusLabel}</span>
                    </div>
                    <span className="notifications-panel__item-meta">{metaLabel}</span>
                    <p className="notifications-panel__item-message">{message}</p>
                  </button>
                );
              })
            )}
          </div>
          <div className="notifications-panel__details">
            {selectedOrder ? (
              <div className="notifications-panel__details-card">
                <header className="notifications-panel__details-header">
                  <div>
                    <span className="notifications-panel__details-label">Order Reference</span>
                    <h3>{selectedOrder.reference}</h3>
                  </div>
                  <span
                    className={
                      selectedOrder.status === "delivered"
                        ? "notifications-panel__details-status is-delivered"
                        : "notifications-panel__details-status"
                    }
                  >
                    {selectedOrder.status === "delivered" ? "Delivered" : "Pending"}
                  </span>
                </header>
                <section className="notifications-panel__details-section">
                  <h4>Customer Details</h4>
                  <ul>
                    <li><span>Name</span><span>{selectedOrder.customer.name}</span></li>
                    <li><span>Phone</span><span>{selectedOrder.customer.phone}</span></li>
                    <li><span>Address</span><span>{selectedOrder.customer.address}</span></li>
                  </ul>
                </section>
                <section className="notifications-panel__details-section">
                  <h4>Order Summary</h4>
                  <ul>
                    <li><span>Total</span><span>{formatPrice(selectedOrder.totals.total)}</span></li>
                    <li><span>Placed</span><span>{new Date(selectedOrder.createdAt).toLocaleString()}</span></li>
                    <li><span>Delivery</span><span>{selectedOrder.deliveryMessage}</span></li>
                  </ul>
                </section>
                <section className="notifications-panel__details-section">
                  <h4>Items</h4>
                  <ul className="notifications-panel__items-list">
                    {selectedOrder.items.map((item) => (
                      <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.quantity} x {formatPrice(item.price)}</span>
                      </li>
                    ))}
                  </ul>
                </section>
                {selectedOrder.status !== "delivered" ? (
                  <button
                    type="button"
                    className="notifications-panel__details-action"
                    onClick={() => handleMarkDelivered(selectedOrder.id)}
                  >
                    Mark as Delivered
                  </button>
                ) : null}
              </div>
            ) : (
              <p className="notifications-panel__empty">Select an order to view its details.</p>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
