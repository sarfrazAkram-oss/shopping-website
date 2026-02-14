import Link from "next/link";
import ProductCard from "../components/ProductCard";

const trendingSneakers = [
  { name: "AirFly Prime", price: "$140", image: "/images/shoes/shoes1.jpg", action: "Add to Cart", category: "sneakers" },
  { name: "Urban Stride", price: "$155", image: "/images/shoes/shoes2.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Velocity Edge", price: "$162", image: "/images/shoes/shoes4.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Metro Glide", price: "$150", image: "/images/shoes/backgroud_pictures/men1.jpg", action: "Add to Cart", category: "sneakers" },
  { name: "Trail Luxe", price: "$158", image: "/images/shoes/backgroud_pictures/women2.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Pulse Runner", price: "$168", image: "/images/shoes/backgroud_pictures/running1.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Prime Dash", price: "$164", image: "/images/shoes/shoes2.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Street Sprint", price: "$159", image: "/images/shoes/shoes4.jfif", action: "Add to Cart", category: "sneakers" },
];

const trendingPerfumes = [
  { name: "Miraj Noir", price: "$195", image: "/images/perfumes/perfume5.jfif", action: "Add to Cart", category: "perfumes" },
  { name: "Rosani Blush", price: "$205", image: "/images/perfumes/perfume4.webp", action: "Add to Cart", category: "perfumes" },
  { name: "Golden Aura", price: "$182", image: "/images/perfumes/perfume5.jfif", action: "Add to Cart", category: "perfumes" },
  { name: "Ivory Musk", price: "$188", image: "/images/perfumes/perfumes.jpeg", action: "Add to Cart", category: "perfumes" },
];

export default function HomePage() {
  return (
    <main className="home">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-layout">
          <div className="hero-panel hero-panel-left">
            <img
              src="/images/shoes/shoes2.jfif"
              alt="Premium sneaker showcased on a neutral background"
              className="hero-image"
              loading="lazy"
            />
          </div>
          <div className="hero-panel hero-panel-right">
            <img
              src="/images/perfumes/perfume4.webp"
              alt="Luxury perfume bottle displayed on a warm backdrop"
              className="hero-image"
              loading="lazy"
            />
          </div>
          <div className="hero-content">
            <h1 id="hero-heading">Premium Sneakers & Luxury Fragrances</h1>
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
          <div
            className="category-media category-media-sneakers"
            role="img"
            aria-label="Sneaker displayed on beige card"
          />
          <div className="category-body">
            <h2>Sneakers Collection</h2>
            <Link href="/sneakers" className="btn btn-dark">
              Explore Now
            </Link>
          </div>
        </article>
        <article className="category-card">
          <div
            className="category-media category-media-perfume"
            role="img"
            aria-label="Perfume bottle staged for display"
          />
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
        <div className="trending-rows">
          <div className="trending-rows__group" aria-label="Trending sneakers">
            <div className="product-grid">
              {trendingSneakers.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  action={{ type: "cart", label: "Add to Cart" }}
                  fallbackImage={product.image}
                  source="home-trending"
                />
              ))}
            </div>
          </div>
          <div className="trending-rows__group trending-rows__group--perfumes" aria-label="Trending perfumes">
            <div className="product-grid">
              {trendingPerfumes.map((product) => (
                <ProductCard
                  key={product.name}
                  product={product}
                  action={{ type: "cart", label: "Add to Cart" }}
                  fallbackImage={product.image}
                  source="home-trending"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="trending-see-more" aria-label="Explore more products">
          <Link href="/sneakers" className="btn btn-dark trending-see-more__button">
            <span>See More Sneakers</span>
            <span className="trending-see-more__arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/perfumes" className="btn btn-light trending-see-more__button">
            <span>See More Perfumes</span>
            <span className="trending-see-more__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="features" aria-label="Store benefits">
        <article className="feature-card">
          <div className="feature-icon feature-icon--delivery" aria-hidden="true" />
          <h3>Fast Delivery</h3>
          <p>Tried-and-true partners bring orders home quickly.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon feature-icon--quality" aria-hidden="true" />
          <h3>Premium Quality</h3>
          <p>Only curated sneakers and fragrances make the cut.</p>
        </article>
        <article className="feature-card">
          <div className="feature-icon feature-icon--secure" aria-hidden="true" />
          <h3>Secure Payments</h3>
          <p>Encrypted transactions keep every purchase protected.</p>
        </article>
      </section>
    </main>
  );
}
