'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { catalogItems } from "../data/catalog";

function filterCatalog(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) {
    return [];
  }
  return catalogItems.filter((item) => {
    const haystack = `${item.name} ${item.category}`.toLowerCase();
    return haystack.includes(normalized);
  });
}

export default function Navbar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const matches = filterCatalog(query);
    setResults(matches);
    setHasSearched(true);
  };

  const resultLabel = useMemo(() => {
    if (!hasSearched) {
      return "";
    }
    if (results.length === 0) {
      return "No results found";
    }
    return `${results.length} result${results.length > 1 ? "s" : ""} found`;
  }, [hasSearched, results]);

  return (
    <header className="navbar" role="banner">
      <div className="navbar-inner">
        <div className="navbar-start">
          <div className="navbar-logo">SHOESCO.</div>
          <div className="navbar-search">
            <form className="search-form" onSubmit={handleSubmit} role="search">
              <label className="sr-only" htmlFor="navbar-search-input">
                Search products
              </label>
              <input
                id="navbar-search-input"
                className="search-input"
                type="search"
                placeholder="Search sneakers or perfumes"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search products"
              />
              <button type="submit" className="search-button" aria-label="Submit search">
                <span className="search-icon" aria-hidden="true" />
              </button>
            </form>
            {hasSearched && (
              <div className="search-results" role="listbox" aria-live="polite">
                {resultLabel && <div className="results-label">{resultLabel}</div>}
                {results.length === 0 ? (
                  <p className="results-empty">No results found</p>
                ) : (
                  <ul>
                    {results.map((item) => (
                      <li key={item.name} role="option">
                        <span className="result-name">{item.name}</span>
                        <span className="result-meta">{item.category}</span>
                        <span className="result-price">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
        <nav className="navbar-links" aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/sneakers">Sneakers</Link>
          <Link href="/perfumes">Perfumes</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="navbar-mark" aria-label="Temporary logo">
          <img src="/images/temp-logo.png" alt="Temporary SHOESCO logo" />
        </div>
      </div>
    </header>
  );
}
