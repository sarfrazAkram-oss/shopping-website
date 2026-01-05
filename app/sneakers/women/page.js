import Link from "next/link";
import "../../../styles/sneakers.css";
import AddToCartButton from "../../../components/AddToCartButton";

const filterLinks = [
  { href: "/sneakers", label: "All" },
  { href: "/sneakers/men", label: "Men" },
  { href: "/sneakers/women", label: "Women", isActive: true },
  { href: "/sneakers/running", label: "Running" },
  { href: "/sneakers/casual", label: "Casual" },
];

const topProducts = [
  { name: "Luna Bloom", price: "$158", image: "/images/shoes/backgroud_pictures/women1.webp" },
  { name: "Silk Horizon", price: "$164", image: "/images/shoes/backgroud_pictures/women2.jfif" },
  { name: "Aurora Drift", price: "$155", image: "/images/shoes/shoes4.jfif" },
  { name: "Velvet Wave", price: "$170", image: "/images/shoes/shoes1.jpg" },
];

const bestSellers = [
  { name: "Pearl Motion", price: "$168", image: "/images/shoes/backgroud_pictures/women1.webp" },
  { name: "Glam Swift", price: "$162", image: "/images/shoes/backgroud_pictures/women2.jfif" },
  { name: "Opal Glide", price: "$159", image: "/images/shoes/shoes1.jpg" },
  { name: "Rose Eclipse", price: "$167", image: "/images/shoes/shoes4.jfif" },
  { name: "Ivory Pulse", price: "$172", image: "/images/shoes/backgroud_pictures/women1.webp" },
  { name: "Dusk Allure", price: "$160", image: "/images/shoes/backgroud_pictures/women2.jfif" },
  { name: "Fleur Pace", price: "$166", image: "/images/shoes/shoes1.jpg" },
  { name: "Charm Sprint", price: "$171", image: "/images/shoes/shoes4.jfif" },
  { name: "Grace Runner", price: "$163", image: "/images/shoes/backgroud_pictures/women1.webp" },
  { name: "Velour Dash", price: "$169", image: "/images/shoes/backgroud_pictures/women2.jfif" },
];

function ProductCard({ product }) {
  const imageClass = product.image ? "sneaker-card__image has-image" : "sneaker-card__image";
  const imageStyle = product.image
    ? {
        backgroundImage: `url(${product.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  return (
    <article className="sneaker-card">
      <div className={imageClass} style={imageStyle} aria-hidden="true">
        {!product.image && "Image Placeholder"}
      </div>
      <div className="sneaker-card__body">
        <h3>{product.name}</h3>
        <p className="sneaker-card__price">{product.price}</p>
        <AddToCartButton
          product={product}
          className="sneaker-card__cta"
          fallbackImage="/images/shoes/backgroud_pictures/women2.jfif"
          source="sneakers-women"
        >
          Add to Cart
        </AddToCartButton>
      </div>
    </article>
  );
}

export default function WomenSneakersPage() {
  return (
    <main className="sneakers-page">
      <section className="sneaker-hero sneaker-hero--women">
        <div className="sneaker-hero__content">
          <span className="sneaker-hero__eyebrow">Women&apos;s Collection</span>
          <h1>Women&apos;s Premium Sneakers</h1>
          <p>Luxury finishes aur graceful contours jo everyday glamour ko effortless banayein.</p>
          <button className="sneaker-hero__cta" type="button">Shop Women&apos;s</button>
        </div>
        <div className="sneaker-hero__visual">
          <div className="sneaker-hero__image-frame">
            <img src="/images/shoes/backgroud_pictures/women2.jfif" alt="Women&apos;s premium sneaker" />
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
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>

      <section className="sneaker-explore sneaker-explore--women">
        <div className="sneaker-explore__copy">
          <h2>Explore Our Collection of Premium Sneakers</h2>
          <p>Designer silhouettes, engineered comfort aur luxe materials ke sath har occasion ke liye perfect pair.</p>
          <button type="button" className="sneaker-explore__cta">Explore Collection</button>
        </div>
        <div className="sneaker-explore__visual">
          <div className="sneaker-explore__image-frame">
            <img src="/images/shoes/backgroud_pictures/women1.webp" alt="Women&apos;s lifestyle sneaker" />
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
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}