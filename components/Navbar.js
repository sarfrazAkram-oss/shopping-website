'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/sneakers", label: "Sneakers" },
  { href: "/perfumes", label: "Perfumes" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const resolveActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href || pathname.startsWith(`${href}/`);
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
        <div className="site-navbar__cart" aria-label="View cart">
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
        </div>
      </div>
    </header>
  );
}
