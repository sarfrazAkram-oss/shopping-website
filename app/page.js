import Link from "next/link";
import { featuredProducts } from "../data/catalog";

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-layout">
          <div className="hero-panel hero-panel-left">
            <img
              src="/images/hero-sneaker.jpg"
              alt="Premium sneaker on neutral background"
              className="hero-image"
            />
          </div>
          <div className="hero-panel hero-panel-right">
            <img
              src="/images/hero-perfume.jpg"
              alt="Luxury perfume bottle on warm backdrop"
              className="hero-image"
            />
          </div>
          <div className="hero-content">
            <h1 id="hero-heading">
              Premium Sneakers &
              <br />
              Luxury Fragrances.
            </h1>
            <p>Style jo ap ki personality ko complete kare.</p>
            <div className="hero-actions">
              <Link href="/sneakers" className="btn btn-dark">
                Shop Sneakers
              </Link>
              <Link href="/perfumes" className="btn btn-light">
                Shop Perfumes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section" aria-label="Shop by category">
        <article className="category-card">
          <div className="category-media">
            <img
              src="/images/category-sneakers.jpg"
              alt="Sneaker displayed on beige card"
            />
          </div>
          <div className="category-body">
            <h2>Sneakers Collection</h2>
            <Link href="/sneakers" className="btn btn-dark">
              Explore Now
            </Link>
          </div>
        </article>
        <article className="category-card">
          <div className="category-media">
            <img
              src="/images/category-perfume.jpg"
              alt="Perfume bottle staged for display"
            />
          </div>
          <div className="category-body">
            <h2>Luxury Perfumes</h2>
            <Link href="/perfumes" className="btn btn-light">
              Shop Now
            </Link>
          </div>
        </article>
      </section>

      <section className="trending" aria-labelledby="trending-heading">
        <h2 id="trending-heading">Trending Now</h2>
        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-media">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-body">
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
                <button type="button" className="btn btn-dark">
                  {product.action}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="features" aria-label="Store benefits">
        <article className="feature-card">
          <div className="feature-icon" aria-hidden="true" />
          <h3>Fast Delivery</h3>
          <p>Tried-and-true partners bring orders home quickly.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon" aria-hidden="true" />
          <h3>Premium Quality</h3>
          <p>Only curated sneakers and fragrances make the cut.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon" aria-hidden="true" />
          <h3>Secure Payments</h3>
          <p>Encrypted transactions keep every purchase protected.</p>
        </article>
      </section>
    </main>
  );
}
