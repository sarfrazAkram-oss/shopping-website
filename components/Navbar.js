'use client';

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "./CartProvider";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/sneakers", label: "Sneakers" },
  { href: "/perfumes", label: "Perfumes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const {
    cartCount,
    toggleCart,
    closeCart,
    toggleNotifications,
    closeNotifications,
    ownerUnreadCount,
  } = useCart();

  const resolveActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    closeCart();
    closeNotifications();
  }, [pathname, closeCart, closeNotifications]);

  const handleCartKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      closeNotifications();
      toggleCart();
    }
  };

  const handleNotificationsKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      closeCart();
      toggleNotifications();
    }
  };

  return (
    <header className="site-navbar" role="banner">
      <div className="site-navbar__inner">
        <div className="site-navbar__brand" aria-label="SHOESCO brand">
          <Link href="/">SHOESCO.</Link>
        </div>
        <nav className="site-navbar__nav" aria-label="Primary">
          {primaryLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={resolveActive(href) ? "site-navbar__link is-active" : "site-navbar__link"}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="site-navbar__actions" role="group" aria-label="Store controls">
          <div
            className="site-navbar__icon"
            role="button"
            tabIndex={0}
            aria-label="View notifications"
            onClick={() => {
              closeCart();
              toggleNotifications();
            }}
            onKeyDown={handleNotificationsKeyDown}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12 3a5 5 0 0 0-5 5v2.764c0 .512-.195 1.005-.543 1.375L5.4 13.3A1 1 0 0 0 6.133 15h11.734a1 1 0 0 0 .732-1.7l-1.057-1.16a1.95 1.95 0 0 1-.542-1.376V8a5 5 0 0 0-5-5Zm0 16a2 2 0 0 0 1.995-1.85L14 17h-4a2 2 0 0 0 1.85 1.995L12 19Z"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
            {ownerUnreadCount > 0 ? (
              <span className="site-navbar__cart-badge" aria-label={`${ownerUnreadCount} new notifications`}>
                {ownerUnreadCount}
              </span>
            ) : null}
          </div>
          <div
            className="site-navbar__icon"
            role="button"
            tabIndex={0}
            aria-label="View cart"
            onClick={() => {
              closeNotifications();
              toggleCart();
            }}
            onKeyDown={handleCartKeyDown}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M6.75 6h14.313l-1.512 8.437A2 2 0 0 1 17.585 16H9.631a2 2 0 0 1-1.962-1.648L6.75 6Zm0 0L5.5 2.75H2"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="10.25" cy="19.5" r="1.25" stroke="currentColor" strokeWidth="1.4" fill="none" />
              <circle cx="17.75" cy="19.5" r="1.25" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
            {cartCount > 0 ? (
              <span className="site-navbar__cart-badge" aria-label={`${cartCount} items in cart`}>
                {cartCount}
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}
