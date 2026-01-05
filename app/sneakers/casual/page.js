import Link from "next/link";
import "../../../styles/sneakers.css";
import AddToCartButton from "../../../components/AddToCartButton";

const filterLinks = [
  { href: "/sneakers", label: "All" },
  { href: "/sneakers/men", label: "Men" },
  { href: "/sneakers/women", label: "Women" },
  { href: "/sneakers/running", label: "Running" },
  { href: "/sneakers/casual", label: "Casual", isActive: true },
];

const topProducts = [
  { name: "Lounge Drift", price: "$152", image: "/images/shoes/backgroud_pictures/casual1.webp" },
  { name: "Metro Ease", price: "$158", image: "/images/shoes/backgroud_pictures/casual2.webp" },
  { name: "Calm Horizon", price: "$149", image: "/images/shoes/shoes4.jfif" },
  { name: "Everyday Pulse", price: "$155", image: "/images/shoes/shoes1.jpg" },
];

const bestSellers = [
  { name: "Relaxed Orbit", price: "$160", image: "/images/shoes/backgroud_pictures/casual1.webp" },
  { name: "City Leisure", price: "$154", image: "/images/shoes/backgroud_pictures/casual2.webp" },
  { name: "Urban Breeze", price: "$162", image: "/images/shoes/shoes1.jpg" },
  { name: "Soft Glide", price: "$157", image: "/images/shoes/shoes4.jfif" },
  { name: "Cozy Step", price: "$159", image: "/images/shoes/backgroud_pictures/casual1.webp" },
  { name: "Gentle Pace", price: "$156", image: "/images/shoes/backgroud_pictures/casual2.webp" },
  { name: "Weekend Flow", price: "$163", image: "/images/shoes/shoes1.jpg" },
  { name: "Comfy Route", price: "$158", image: "/images/shoes/shoes4.jfif" },
  { name: "Ease Runner", price: "$161", image: "/images/shoes/backgroud_pictures/casual1.webp" },
  { name: "Daily Motion", price: "$155", image: "/images/shoes/backgroud_pictures/casual2.webp" },
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
          fallbackImage="/images/shoes/backgroud_pictures/casual2.webp"
          source="sneakers-casual"
        >
          Add to Cart
        </AddToCartButton>
      </div>
    </article>
  );
}

export default function CasualSneakersPage() {
  return (
    <main className="sneakers-page">
      <section className="sneaker-hero sneaker-hero--casual">
        <div className="sneaker-hero__content">
          <span className="sneaker-hero__eyebrow">Casual Collection</span>
          <h1>Casual Lifestyle Sneakers</h1>
          <p>Relaxed silhouettes aur cushioned comfort jo har easygoing plan ke liye fit ho.</p>
          <button className="sneaker-hero__cta" type="button">Shop Casual</button>
        </div>
        <div className="sneaker-hero__visual">
          <div className="sneaker-hero__image-frame">
            <img src="/images/shoes/backgroud_pictures/casual2.webp" alt="Casual lifestyle sneaker" />
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

      <section className="sneaker-explore sneaker-explore--casual">
        <div className="sneaker-explore__copy">
          <h2>Explore Our Collection of Premium Sneakers</h2>
          <p>Designer silhouettes, engineered comfort aur luxe materials ke sath har occasion ke liye perfect pair.</p>
          <button type="button" className="sneaker-explore__cta">Explore Collection</button>
        </div>
        <div className="sneaker-explore__visual">
          <div className="sneaker-explore__image-frame">
            <img src="/images/shoes/backgroud_pictures/casual1.webp" alt="Casual sneaker showcase" />
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
