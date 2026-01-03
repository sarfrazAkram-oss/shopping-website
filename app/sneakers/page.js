import Link from "next/link";
import "../../styles/sneakers.css";

const topProducts = [
  { name: "AirFly Pro", price: "$130" },
  { name: "AirMax X Nova", price: "$145" },
  { name: "UrbanFlex", price: "$152" },
  { name: "NeoStride", price: "$168" },
];

const bestSellers = [
  { name: "PrimeStride", price: "$172" },
  { name: "PowerStride", price: "$176" },
  { name: "FlexRun", price: "$169" },
  { name: "StreetNova", price: "$158" },
  { name: "AeroPulse", price: "$166" },
  { name: "UrbanEclipse", price: "$174" },
  { name: "Velocity X", price: "$162" },
  { name: "Momentum Pro", price: "$170" },
  { name: "CitySprint", price: "$155" },
  { name: "LuxeTrail", price: "$178" },
  { name: "StrideSphere", price: "$168" },
  { name: "NeoRacer", price: "$172" },
  { name: "MetroFlow", price: "$164" },
  { name: "PulseEdge", price: "$171" },
  { name: "EvoMotion", price: "$159" },
  { name: "Vantage Glide", price: "$175" },
];

const filterLinks = [
  { href: "/sneakers", label: "All", isActive: true },
  { href: "/sneakers/men", label: "Men" },
  { href: "/sneakers/women", label: "Women" },
  { href: "/sneakers/running", label: "Running" },
  { href: "/sneakers/casual", label: "Casual" },
];

export default function SneakersPage() {
  return (
    <main className="sneakers-page">
      <section className="sneaker-hero">
        <div className="sneaker-hero__content">
          <span className="sneaker-hero__eyebrow">Sneaker Boutique</span>
          <h1>Premium Sneakers for Every Style.</h1>
          <p>Apni style aur comfort ko upgrade karein latest premium sneakers ke sath.</p>
          <button className="sneaker-hero__cta" type="button">Shop Sneakers</button>
        </div>
        <div className="sneaker-hero__visual">
          <div className="sneaker-hero__image-frame">
            <img src="/images/shoes/shoes4.jfif" alt="Premium sneaker" />
          </div>
        </div>
      </section>

      <nav className="sneaker-filter" aria-label="Sneaker categories">
        {filterLinks.map(({ href, label, isActive }) => (
          <Link key={href} href={href} className={isActive ? "sneaker-filter__pill is-active" : "sneaker-filter__pill"}>
            {label}
          </Link>
        ))}
      </nav>

      <section className="sneaker-section">
        <div className="sneaker-section__header">
          <h2>Top Products</h2>
          <p>Curated premium releases jo har wardrobe ko elevate karein.</p>
        </div>
        <div className="sneaker-grid">
          {topProducts.map((product) => (
            <article key={product.name} className="sneaker-card">
              <div className="sneaker-card__image" aria-hidden="true">Image Placeholder</div>
              <div className="sneaker-card__body">
                <h3>{product.name}</h3>
                <p className="sneaker-card__price">{product.price}</p>
                <button type="button" className="sneaker-card__cta">Add to Cart</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sneaker-explore">
        <div className="sneaker-explore__copy">
          <h2>Explore Our Collection of Premium Sneakers</h2>
          <p>Designer silhouettes, engineered comfort aur luxe materials ke sath har occasion ke liye perfect pair.</p>
          <button type="button" className="sneaker-explore__cta">Explore Collection</button>
        </div>
        <div className="sneaker-explore__visual">
          <div className="sneaker-explore__image-frame">
            <img src="/images/shoes/shoes2.jfif" alt="Showcase sneaker" />
          </div>
        </div>
      </section>

      <section className="sneaker-section">
        <div className="sneaker-section__header">
          <h2>Best Sellers</h2>
          <p>Customer favorites jo hamesha sold-out ke kareeb rehte hain.</p>
        </div>
        <div className="sneaker-grid sneaker-grid--dense">
          {bestSellers.map((product) => (
            <article key={product.name} className="sneaker-card">
              <div className="sneaker-card__image" aria-hidden="true">Image Placeholder</div>
              <div className="sneaker-card__body">
                <h3>{product.name}</h3>
                <p className="sneaker-card__price">{product.price}</p>
                <button type="button" className="sneaker-card__cta">Add to Cart</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
