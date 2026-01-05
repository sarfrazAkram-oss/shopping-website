import "../../styles/perfumes.css";
import AddToCartButton from "../../components/AddToCartButton";

const topProducts = [
  { name: "Rosani Intense", price: "$150", image: "/images/perfumes/perfume4.webp" },
  { name: "Noir Essence", price: "$195", image: "/images/perfumes/perfume5.jfif" },
  { name: "Miraj Signature", price: "$210", image: "/images/perfumes/perfume4.webp" },
  { name: "Velvet Oud", price: "$185", image: "/images/perfumes/perfume5.jfif" },
];

const bestSellers = [
  { name: "Amber Royale", price: "$172", image: "/images/perfumes/perfume4.webp" },
  { name: "Saffron Veil", price: "$168", image: "/images/perfumes/perfume5.jfif" },
  { name: "Midnight Bloom", price: "$176", image: "/images/perfumes/perfume4.webp" },
  { name: "Ivory Musk", price: "$164", image: "/images/perfumes/perfume5.jfif" },
  { name: "Opulent Mist", price: "$178", image: "/images/perfumes/perfume4.webp" },
  { name: "Golden Aura", price: "$182", image: "/images/perfumes/perfume5.jfif" },
  { name: "Celestial Noir", price: "$188", image: "/images/perfumes/perfume4.webp" },
  { name: "Dusky Reverie", price: "$174", image: "/images/perfumes/perfume5.jfif" },
];

function ProductCard({ product }) {
  return (
    <article className="perfume-card">
      <div className="perfume-card__image" aria-hidden="true">
        <img src={product.image} alt="" />
      </div>
      <div className="perfume-card__body">
        <h3>{product.name}</h3>
        <p className="perfume-card__price">{product.price}</p>
        <AddToCartButton
          product={product}
          className="perfume-card__cta"
          fallbackImage="/images/perfumes/perfume5.jfif"
          source="perfumes"
        >
          Add to Cart
        </AddToCartButton>
      </div>
    </article>
  );
}

export default function PerfumesPage() {
  return (
    <main className="perfumes-page">
      <section className="perfume-hero">
        <div className="perfume-hero__content">
          <span className="perfume-hero__eyebrow">Luxury Fragrances</span>
          <h1 className="perfume-hero__title">Exquisite Scents for Sophisticated Tastes.</h1>
          <p className="perfume-hero__description">Apni personality ko Rosani ke luxury perfumes ke zariye behtareen tareeke se zahir karein.</p>
          <button className="perfume-hero__cta" type="button">Shop Perfumes</button>
        </div>
        <div className="perfume-hero__visual">
          <div className="perfume-hero__image-frame">
            <img src="/images/perfumes/perfume4.webp" alt="Primary luxury perfume bottle" className="perfume-hero__bottle perfume-hero__bottle--primary" />
            <img src="/images/perfumes/perfume5.jfif" alt="Secondary luxury perfume bottle" className="perfume-hero__bottle perfume-hero__bottle--secondary" />
          </div>
        </div>
      </section>

      <section className="perfume-section">
        <div className="perfume-section__header">
          <h2>Top Products</h2>
          <p>Curated premium releases jo har collection ko elevate karein aur lasting impression chhod dein.</p>
        </div>
        <div className="perfume-grid">
          {topProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="perfume-explore">
        <div className="perfume-explore__copy">
          <h2>Explore Our Collection of Luxury Perfumes</h2>
          <p>Indulge in sophistication with signature blends jo timeless elegance ko capture karein.</p>
          <button type="button" className="perfume-explore__cta">Explore Collection</button>
        </div>
        <div className="perfume-explore__visual">
          <div className="perfume-explore__image-frame">
            <img src="/images/perfumes/perfume4.webp" alt="Luxury perfume bottle" className="perfume-explore__bottle perfume-explore__bottle--left" />
            <img src="/images/perfumes/perfume5.jfif" alt="Premium perfume bottle" className="perfume-explore__bottle perfume-explore__bottle--right" />
          </div>
        </div>
      </section>

      <section className="perfume-section">
        <div className="perfume-section__header">
          <h2>Best Sellers</h2>
          <p>Customer favorites jinhe perfume connoisseurs baar-baar choose karte hain.</p>
        </div>
        <div className="perfume-grid perfume-grid--dense">
          {bestSellers.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
