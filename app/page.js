import Link from "next/link";
import ProductCard from "../components/ProductCard";

const trendingProducts = [
  { name: "AirFly Prime", price: "$140", image: "/images/shoes/shoes1.jpg", action: "Add to Cart", category: "sneakers" },
  { name: "Miraj Noir", price: "$195", image: "/images/perfumes/perfume5.jfif", action: "Shop Now", category: "perfumes" },
  { name: "Urban Stride", price: "$155", image: "/images/shoes/shoes2.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Rosani Blush", price: "$205", image: "/images/perfumes/perfume4.webp", action: "Shop Now", category: "perfumes" },
  { name: "Velocity Edge", price: "$162", image: "/images/shoes/shoes4.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Golden Aura", price: "$182", image: "/images/perfumes/perfume5.jfif", action: "Add to Cart", category: "perfumes" },
  { name: "Metro Glide", price: "$150", image: "/images/shoes/backgroud_pictures/men1.jpg", action: "Add to Cart", category: "sneakers" },
  { name: "Ivory Musk", price: "$188", image: "/images/perfumes/perfumes.jpeg", action: "Shop Now", category: "perfumes" },
  { name: "Trail Luxe", price: "$158", image: "/images/shoes/backgroud_pictures/women2.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Saffron Veil", price: "$176", image: "/images/perfumes/perfume4.webp", action: "Add to Cart", category: "perfumes" },
  { name: "Pulse Runner", price: "$168", image: "/images/shoes/backgroud_pictures/running1.jfif", action: "Add to Cart", category: "sneakers" },
  { name: "Velvet Oud", price: "$210", image: "/images/perfumes/perfume5.jfif", action: "Shop Now", category: "perfumes" },
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
        <div className="product-grid">
          {trendingProducts.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
              action={
                product.action === "Add to Cart"
                  ? { type: "cart", label: "Add to Cart" }
                  : {
                      type: "link",
                      label: product.action,
                      href: product.category === "perfumes" ? "/perfumes" : "/sneakers",
                    }
              }
              fallbackImage={product.image}
              source="home-trending"
            />
          ))}
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
