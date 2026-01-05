'use client';

import { createContext, useContext, useEffect, useMemo, useReducer, useCallback } from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "shoesco.cart.v1";
const ORDER_STATE_STORAGE_KEY = "shoesco.orderState.v1";
const DELIVERY_MESSAGE = "Your order will be delivered within 7 days";

const initialState = {
  items: [],
  orders: [],
  ownerNotifications: [],
  customerNotifications: [],
  isCartOpen: false,
  isNotificationsOpen: false,
  initialized: false,
  nextOrderSequence: 1,
};

function safeArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return [];
}

function normalizeOrderRecord(raw) {
  if (!raw) {
    return null;
  }
  const createdAt = raw.createdAt ?? raw.submittedAt ?? new Date().toISOString();
  const updatedAt = raw.updatedAt ?? createdAt;
  const statusValue = typeof raw.status === "string" ? raw.status.toLowerCase() : "pending";
  const status = statusValue === "delivered" ? "delivered" : "pending";
  const rawSequence = Number(raw.sequence ?? raw.orderNumber ?? raw.orderIndex ?? raw.position);
  const sequence = Number.isFinite(rawSequence) && rawSequence > 0 ? Math.floor(rawSequence) : null;
  const items = safeArray(raw.items).map((item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return {
      id: item.id,
      name: item.name,
      price,
      quantity,
      lineTotal: item.lineTotal ? Number(item.lineTotal) || price * quantity : price * quantity,
    };
  });
  const totals = {
    subtotal: Number(raw.totals?.subtotal ?? raw.subtotal ?? 0) || 0,
    delivery: Number(raw.totals?.delivery ?? raw.delivery ?? 0) || 0,
    total: Number(raw.totals?.total ?? raw.total ?? 0) || 0,
  };
  const historyBase = Array.isArray(raw.history) && raw.history.length > 0 ? raw.history : [
    {
      status: "pending",
      message: "Order received",
      timestamp: createdAt,
    },
  ];
  const normalizedHistory = historyBase.map((entry) => ({
    status: entry.status ? entry.status.toString().toLowerCase() : "pending",
    message: entry.message || "",
    timestamp: entry.timestamp || createdAt,
  }));
  if (status === "delivered" && !normalizedHistory.some((entry) => entry.status === "delivered")) {
    normalizedHistory.push({
      status: "delivered",
      message: "Order marked as delivered",
      timestamp: updatedAt,
    });
  }

  const reference = typeof raw.reference === "string" && raw.reference.trim()
    ? raw.reference.trim()
    : sequence
      ? `Order #${sequence}`
      : null;

  return {
    id: raw.id || `order-${createdAt}`,
    customer: {
      name: raw.customer?.name ?? "",
      phone: raw.customer?.phone ?? "",
      address: raw.customer?.address ?? "",
    },
    items,
    totals,
    status,
    createdAt,
    updatedAt,
    deliveryMessage: raw.deliveryMessage || DELIVERY_MESSAGE,
    history: normalizedHistory,
    sequence,
    reference,
  };
}

function createOrderRecord(draft, existingIds, nextSequence) {
  const timestamp = new Date();
  const baseId = draft.id && !existingIds.has(draft.id) ? draft.id : `order-${timestamp.getTime()}`;
  const iso = timestamp.toISOString();
  const sequenceCandidate = Number(nextSequence);
  const sequence = Number.isFinite(sequenceCandidate) && sequenceCandidate > 0 ? Math.floor(sequenceCandidate) : existingIds.size + 1;
  const reference = `Order #${sequence}`;
  const items = safeArray(draft.items).map((item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return {
      id: item.id,
      name: item.name,
      price,
      quantity,
      lineTotal: price * quantity,
    };
  });

  const totals = {
    subtotal: Number(draft.totals?.subtotal) || 0,
    delivery: Number(draft.totals?.delivery) || 0,
    total: Number(draft.totals?.total) || 0,
  };

  return {
    id: baseId,
    customer: {
      name: draft.customer?.name ?? "",
      phone: draft.customer?.phone ?? "",
      address: draft.customer?.address ?? "",
    },
    items,
    totals,
    status: "pending",
    createdAt: iso,
    updatedAt: iso,
    deliveryMessage: DELIVERY_MESSAGE,
    history: [
      {
        status: "pending",
        message: "Order received",
        timestamp: iso,
      },
    ],
    sequence,
    reference,
  };
}

function createOwnerNotification(order) {
  return {
    id: `owner-${order.id}-${order.createdAt}`,
    orderId: order.id,
    orderReference: order.reference,
    type: "new-order",
    message: `${order.reference || "New order"} received`,
    createdAt: order.createdAt,
    status: "unread",
  };
}

function createCustomerDeliveryNotification(order) {
  const timestamp = new Date().toISOString();
  return {
    id: `customer-${order.id}-${timestamp}`,
    orderId: order.id,
    orderReference: order.reference,
    type: "delivered",
    message: `${order.reference || "Your order"} has been delivered successfully. Please enjoy!`,
    createdAt: timestamp,
    status: "unread",
  };
}

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE": {
      return {
        ...state,
        items: action.payload.items ?? state.items,
        orders: action.payload.orders ?? state.orders,
        ownerNotifications: action.payload.ownerNotifications ?? state.ownerNotifications,
        customerNotifications: action.payload.customerNotifications ?? state.customerNotifications,
        initialized: true,
        nextOrderSequence: action.payload.nextOrderSequence ?? state.nextOrderSequence,
      };
    }
    case "TOGGLE_NOTIFICATIONS": {
      return { ...state, isNotificationsOpen: !state.isNotificationsOpen };
    }
    case "OPEN_NOTIFICATIONS": {
      return { ...state, isNotificationsOpen: true };
    }
    case "CLOSE_NOTIFICATIONS": {
      return { ...state, isNotificationsOpen: false };
    }
    case "ADD_ITEM": {
      const { item } = action.payload;
      const existingIndex = state.items.findIndex((entry) => entry.id === item.id);
      if (existingIndex === -1) {
        return { ...state, items: [...state.items, item] };
      }
      const updatedItems = state.items.map((entry, index) => {
        if (index !== existingIndex) {
          return entry;
        }
        return { ...entry, quantity: entry.quantity + item.quantity };
      });
      return { ...state, items: updatedItems };
    }
    case "REMOVE_ITEM": {
      const { id } = action.payload;
      return { ...state, items: state.items.filter((entry) => entry.id !== id) };
    }
    case "SET_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return { ...state, items: state.items.filter((entry) => entry.id !== id) };
      }
      const updatedItems = state.items.map((entry) => {
        if (entry.id !== id) {
          return entry;
        }
        return { ...entry, quantity };
      });
      return { ...state, items: updatedItems };
    }
    case "CLEAR_CART": {
      return { ...state, items: [] };
    }
    case "TOGGLE_CART": {
      return { ...state, isCartOpen: !state.isCartOpen };
    }
    case "OPEN_CART": {
      return { ...state, isCartOpen: true };
    }
    case "CLOSE_CART": {
      return { ...state, isCartOpen: false };
    }
    case "STORE_ORDER": {
      const { order, ownerNotification } = action.payload;
      return {
        ...state,
        orders: [order, ...state.orders],
        ownerNotifications: ownerNotification ? [ownerNotification, ...state.ownerNotifications] : state.ownerNotifications,
        nextOrderSequence: Number.isFinite(order.sequence)
          ? Math.max(order.sequence + 1, state.nextOrderSequence)
          : state.nextOrderSequence + 1,
      };
    }
    case "MARK_ORDER_DELIVERED": {
      const { orderId, customerNotification, timestamp } = action.payload;
      const updatedOrders = state.orders.map((order) => {
        if (order.id !== orderId) {
          return order;
        }
        if (order.status === "delivered") {
          return order;
        }
        return {
          ...order,
          status: "delivered",
          updatedAt: timestamp,
          history: [
            ...order.history,
            {
              status: "delivered",
              message: "Order marked as delivered",
              timestamp,
            },
          ],
        };
      });

      const referenceForOrder = updatedOrders.find((entry) => entry.id === orderId)?.reference;

      const updatedOwnerNotifications = state.ownerNotifications.map((notification) => {
        if (notification.orderId !== orderId) {
          return notification;
        }
        if (notification.status === "completed") {
          return notification.orderReference || referenceForOrder
            ? { ...notification, orderReference: notification.orderReference || referenceForOrder }
            : notification;
        }
        return {
          ...notification,
          status: "completed",
          orderReference: notification.orderReference || referenceForOrder,
        };
      });

      return {
        ...state,
        orders: updatedOrders,
        ownerNotifications: updatedOwnerNotifications,
        customerNotifications: customerNotification ? [customerNotification, ...state.customerNotifications] : state.customerNotifications,
      };
    }
    case "MARK_OWNER_NOTIFICATIONS_READ": {
      const referenceMap = new Map(state.orders.map((order) => [order.id, order.reference]));
      let changed = false;
      const updated = state.ownerNotifications.map((notification) => {
        const orderReference = notification.orderReference || referenceMap.get(notification.orderId);
        if (notification.status === "completed" || notification.status === "read") {
          if (orderReference && notification.orderReference !== orderReference) {
            changed = true;
            return { ...notification, orderReference };
          }
          return notification;
        }
        changed = true;
        return orderReference
          ? { ...notification, status: "read", orderReference }
          : { ...notification, status: "read" };
      });
      if (!changed) {
        return state;
      }
      return { ...state, ownerNotifications: updated };
    }
    case "MARK_CUSTOMER_NOTIFICATION_READ": {
      const { notificationId } = action.payload;
      const updated = state.customerNotifications.map((notification) => {
        if (notification.id !== notificationId) {
          return notification;
        }
        return { ...notification, status: "read" };
      });
      return { ...state, customerNotifications: updated };
    }
    default:
      return state;
  }
}

function persistCart(items) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Failed to persist cart", error);
  }
}

function persistOrderState(orderState) {
  try {
    localStorage.setItem(ORDER_STATE_STORAGE_KEY, JSON.stringify(orderState));
  } catch (error) {
    console.error("Failed to persist orders", error);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    try {
      const storedCart = typeof window !== "undefined" ? localStorage.getItem(CART_STORAGE_KEY) : null;
      const storedOrderState = typeof window !== "undefined" ? localStorage.getItem(ORDER_STATE_STORAGE_KEY) : null;
      const parsedCart = storedCart ? JSON.parse(storedCart) : [];
      const parsedOrderState = storedOrderState ? JSON.parse(storedOrderState) : {};
      const normalizedOrdersRaw = Array.isArray(parsedOrderState.orders)
        ? parsedOrderState.orders.map((order) => normalizeOrderRecord(order)).filter(Boolean)
        : [];

      const assignments = new Map();
      let sequenceCursor = 1;
      let maxSequence = 0;

      const assignmentCandidates = [...normalizedOrdersRaw].sort((a, b) => {
        const aTime = new Date(a.createdAt).getTime();
        const bTime = new Date(b.createdAt).getTime();
        return aTime - bTime;
      });

      assignmentCandidates.forEach((order) => {
        const candidate = Number(order.sequence);
        const hasValidSequence = Number.isFinite(candidate) && candidate > 0;
        const chosenSequence = hasValidSequence ? Math.floor(candidate) : sequenceCursor;
        assignments.set(order.id, chosenSequence);
        if (!hasValidSequence) {
          sequenceCursor += 1;
        } else if (candidate >= sequenceCursor) {
          sequenceCursor = Math.floor(candidate) + 1;
        }
        if (chosenSequence > maxSequence) {
          maxSequence = chosenSequence;
        }
      });

      const ordersWithSequence = normalizedOrdersRaw.map((order) => {
        const assignedSequence = assignments.get(order.id) ?? sequenceCursor++;
        const normalizedSequence = Math.max(1, assignedSequence);
        const reference = `Order #${normalizedSequence}`;
        return {
          ...order,
          sequence: normalizedSequence,
          reference,
        };
      });

      const orderReferenceMap = new Map(ordersWithSequence.map((order) => [order.id, order.reference]));

      const hydratedOwnerNotifications = Array.isArray(parsedOrderState.ownerNotifications)
        ? parsedOrderState.ownerNotifications.map((notification) => {
            const reference = notification.orderReference || orderReferenceMap.get(notification.orderId);
            return reference ? { ...notification, orderReference: reference } : notification;
          })
        : [];

      const hydratedCustomerNotifications = Array.isArray(parsedOrderState.customerNotifications)
        ? parsedOrderState.customerNotifications.map((notification) => {
            const reference = notification.orderReference || orderReferenceMap.get(notification.orderId);
            return reference ? { ...notification, orderReference: reference } : notification;
          })
        : [];

      const storedNextSequence = Number(parsedOrderState.nextOrderSequence);
      const nextOrderSequence = Number.isFinite(storedNextSequence) && storedNextSequence > maxSequence
        ? Math.floor(storedNextSequence)
        : maxSequence + 1;
      dispatch({
        type: "HYDRATE",
        payload: {
          items: Array.isArray(parsedCart) ? parsedCart : [],
          orders: ordersWithSequence,
          ownerNotifications: hydratedOwnerNotifications,
          customerNotifications: hydratedCustomerNotifications,
          nextOrderSequence,
        },
      });
    } catch (error) {
      console.error("Failed to hydrate cart", error);
      dispatch({
        type: "HYDRATE",
        payload: { items: [], orders: [], ownerNotifications: [], customerNotifications: [], nextOrderSequence: 1 },
      });
    }
  }, []);

  useEffect(() => {
    if (!state.initialized) {
      return;
    }
    persistCart(state.items);
  }, [state.items, state.initialized]);

  useEffect(() => {
    if (!state.initialized) {
      return;
    }
    persistOrderState({
      orders: state.orders,
      ownerNotifications: state.ownerNotifications,
      customerNotifications: state.customerNotifications,
      nextOrderSequence: state.nextOrderSequence,
    });
  }, [state.orders, state.ownerNotifications, state.customerNotifications, state.initialized, state.nextOrderSequence]);

  const addItem = useCallback((item) => dispatch({ type: "ADD_ITEM", payload: { item } }), [dispatch]);
  const removeItem = useCallback((id) => dispatch({ type: "REMOVE_ITEM", payload: { id } }), [dispatch]);
  const setQuantity = useCallback((id, quantity) => dispatch({ type: "SET_QUANTITY", payload: { id, quantity } }), [dispatch]);
  const clearCart = useCallback(() => dispatch({ type: "CLEAR_CART" }), [dispatch]);
  const toggleCart = useCallback(() => dispatch({ type: "TOGGLE_CART" }), [dispatch]);
  const openCart = useCallback(() => dispatch({ type: "OPEN_CART" }), [dispatch]);
  const closeCart = useCallback(() => dispatch({ type: "CLOSE_CART" }), [dispatch]);
  const toggleNotifications = useCallback(() => dispatch({ type: "TOGGLE_NOTIFICATIONS" }), [dispatch]);
  const openNotifications = useCallback(() => dispatch({ type: "OPEN_NOTIFICATIONS" }), [dispatch]);
  const closeNotifications = useCallback(() => dispatch({ type: "CLOSE_NOTIFICATIONS" }), [dispatch]);

  const storeOrder = useCallback(
    (draft) => {
      const existingIds = new Set(state.orders.map((order) => order.id));
      const orderRecord = createOrderRecord(draft, existingIds, state.nextOrderSequence);
      const ownerNotification = createOwnerNotification(orderRecord);
      dispatch({ type: "STORE_ORDER", payload: { order: orderRecord, ownerNotification } });
      return orderRecord;
    },
    [dispatch, state.nextOrderSequence, state.orders],
  );

  const markOrderDelivered = useCallback(
    (orderId) => {
      const timestamp = new Date().toISOString();
      const order = state.orders.find((entry) => entry.id === orderId);
      if (!order || order.status === "delivered") {
        return null;
      }
      const customerNotification = createCustomerDeliveryNotification(order);
      dispatch({
        type: "MARK_ORDER_DELIVERED",
        payload: { orderId, customerNotification, timestamp },
      });
      return { orderId, timestamp };
    },
    [dispatch, state.orders],
  );

  const markOwnerNotificationsRead = useCallback(() => dispatch({ type: "MARK_OWNER_NOTIFICATIONS_READ" }), [dispatch]);

  const markCustomerNotificationRead = useCallback(
    (notificationId) => dispatch({ type: "MARK_CUSTOMER_NOTIFICATION_READ", payload: { notificationId } }),
    [dispatch],
  );

  const summary = useMemo(() => {
    const subtotal = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
    const delivery = state.items.length > 0 ? 0 : 0;
    const total = subtotal + delivery;
    const itemCount = state.items.reduce((total, item) => total + item.quantity, 0);
    return { subtotal, delivery, total, itemCount };
  }, [state.items]);

  const notificationCounts = useMemo(() => {
    const unread = state.ownerNotifications.filter((notification) => notification.status === "unread").length;
    return { unread };
  }, [state.ownerNotifications]);

  const value = useMemo(() => {
    return {
      items: state.items,
      orders: state.orders,
      ownerNotifications: state.ownerNotifications,
      customerNotifications: state.customerNotifications,
      isCartOpen: state.isCartOpen,
      isNotificationsOpen: state.isNotificationsOpen,
      initialized: state.initialized,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      toggleCart,
      openCart,
      closeCart,
      toggleNotifications,
      openNotifications,
      closeNotifications,
      storeOrder,
      markOrderDelivered,
      markOwnerNotificationsRead,
      markCustomerNotificationRead,
      subtotal: summary.subtotal,
      delivery: summary.delivery,
      total: summary.total,
      cartCount: summary.itemCount,
      ownerUnreadCount: notificationCounts.unread,
    };
  }, [addItem, clearCart, closeCart, closeNotifications, markCustomerNotificationRead, markOrderDelivered, markOwnerNotificationsRead, openCart, openNotifications, removeItem, setQuantity, storeOrder, summary.delivery, summary.itemCount, summary.subtotal, summary.total, state.customerNotifications, state.initialized, state.isCartOpen, state.isNotificationsOpen, state.items, state.orders, state.ownerNotifications, toggleCart, toggleNotifications, notificationCounts.unread]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
