import Link from "next/link";
import "../../../styles/sneakers.css";

const filterLinks = [
  { href: "/sneakers", label: "All" },
  { href: "/sneakers/men", label: "Men" },
  { href: "/sneakers/women", label: "Women" },
  { href: "/sneakers/running", label: "Running", isActive: true },
  { href: "/sneakers/casual", label: "Casual" },
];

const topProducts = [
  { name: "Velocity Surge", price: "$176", image: "/images/shoes/backgroud_pictures/running.jfif" },
  { name: "Pace Reactor", price: "$168", image: "/images/shoes/backgroud_pictures/running1.jfif" },
  { name: "Circuit Sprint", price: "$170", image: "/images/shoes/shoes1.jpg" },
  { name: "Glide Nova", price: "$166", image: "/images/shoes/shoes4.jfif" },
];

const bestSellers = [
  { name: "Aero Reactor", price: "$174", image: "/images/shoes/backgroud_pictures/running.jfif" },
  { name: "Pulse Drive", price: "$169", image: "/images/shoes/backgroud_pictures/running1.jfif" },
  { name: "Stride Helix", price: "$172", image: "/images/shoes/shoes1.jpg" },
  { name: "Momentum Flow", price: "$165", image: "/images/shoes/shoes4.jfif" },
  { name: "Tempo Charge", price: "$170", image: "/images/shoes/backgroud_pictures/running.jfif" },
  { name: "Catalyst Rush", price: "$177", image: "/images/shoes/backgroud_pictures/running1.jfif" },
  { name: "Rev Sprint", price: "$163", image: "/images/shoes/shoes1.jpg" },
  { name: "Edge Propel", price: "$175", image: "/images/shoes/shoes4.jfif" },
  { name: "RunWave Pro", price: "$171", image: "/images/shoes/backgroud_pictures/running.jfif" },
  { name: "Speedline X", price: "$167", image: "/images/shoes/backgroud_pictures/running1.jfif" },
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
        <button type="button" className="sneaker-card__cta">Add to Cart</button>
      </div>
    </article>
  );
}

export default function RunningSneakersPage() {
  return (
    <main className="sneakers-page">
      <section className="sneaker-hero sneaker-hero--running">
        <div className="sneaker-hero__content">
          <span className="sneaker-hero__eyebrow">Running Collection</span>
          <h1>Running Performance Sneakers</h1>
          <p>Responsive cushioning aur aerodynamic support jo har mile ko lighter banayein.</p>
          <button className="sneaker-hero__cta" type="button">Shop Running</button>
        </div>
        <div className="sneaker-hero__visual">
          <div className="sneaker-hero__image-frame">
            <img src="/images/shoes/backgroud_pictures/running1.jfif" alt="Running performance sneaker" />
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

      <section className="sneaker-explore sneaker-explore--running">
        <div className="sneaker-explore__copy">
          <h2>Explore Our Collection of Premium Sneakers</h2>
          <p>Designer silhouettes, engineered comfort aur luxe materials ke sath har occasion ke liye perfect pair.</p>
          <button type="button" className="sneaker-explore__cta">Explore Collection</button>
        </div>
        <div className="sneaker-explore__visual">
          <div className="sneaker-explore__image-frame">
            <img src="/images/shoes/backgroud_pictures/running.jfif" alt="Running sneaker showcase" />
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
