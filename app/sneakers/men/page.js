import Link from "next/link";
import "../../../styles/sneakers.css";

const filterLinks = [
  { href: "/sneakers", label: "All" },
  { href: "/sneakers/men", label: "Men", isActive: true },
  { href: "/sneakers/women", label: "Women" },
  { href: "/sneakers/running", label: "Running" },
  { href: "/sneakers/casual", label: "Casual" },
];

const topProducts = [
  { name: "Atlas Prime", price: "$162", image: "/images/shoes/shoes1.jpg" },
  { name: "Summit Runner", price: "$170", image: "/images/shoes/backgroud_pictures/men1.jpg" },
  { name: "Urban Monarch", price: "$158", image: "/images/shoes/shoes4.jfif" },
  { name: "Forge Flex", price: "$165", image: "/images/shoes/backgroud_pictures/men2.webp" },
];

const bestSellers = [
  { name: "Arc Vanguard", price: "$171", image: "/images/shoes/backgroud_pictures/men1.jpg" },
  { name: "Terra Glide", price: "$156", image: "/images/shoes/backgroud_pictures/men2.webp" },
  { name: "Noir Circuit", price: "$168", image: "/images/shoes/shoes1.jpg" },
  { name: "Polar Apex", price: "$174", image: "/images/shoes/shoes4.jfif" },
  { name: "Metro Shift", price: "$160", image: "/images/shoes/backgroud_pictures/men1.jpg" },
  { name: "VeloCraft", price: "$166", image: "/images/shoes/backgroud_pictures/men2.webp" },
  { name: "Magnum Pace", price: "$172", image: "/images/shoes/shoes1.jpg" },
  { name: "Crown Sprint", price: "$169", image: "/images/shoes/shoes4.jfif" },
  { name: "Prime Glide", price: "$165", image: "/images/shoes/backgroud_pictures/men1.jpg" },
  { name: "Legacy Runner", price: "$173", image: "/images/shoes/backgroud_pictures/men2.webp" },
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

export default function MenSneakersPage() {
  return (
    <main className="sneakers-page">
      <section className="sneaker-hero sneaker-hero--men">
        <div className="sneaker-hero__content">
          <span className="sneaker-hero__eyebrow">Men's Collection</span>
          <h1>Men&apos;s Sneakers Collection</h1>
          <p>Tailored performance aur refined aesthetics jo har men&apos;s wardrobe ko elevate karein.</p>
          <button className="sneaker-hero__cta" type="button">Shop Men&apos;s</button>
        </div>
        <div className="sneaker-hero__visual">
          <div className="sneaker-hero__image-frame">
            <img src="/images/shoes/backgroud_pictures/men2.jfif" alt="Men's premium sneaker" />
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

      <section className="sneaker-explore sneaker-explore--men">
        <div className="sneaker-explore__copy">
          <h2>Explore Our Collection of Premium Sneakers</h2>
          <p>Designer silhouettes, engineered comfort aur luxe materials ke sath har occasion ke liye perfect pair.</p>
          <button type="button" className="sneaker-explore__cta">Explore Collection</button>
        </div>
        <div className="sneaker-explore__visual">
          <div className="sneaker-explore__image-frame">
            <img src="/images/shoes/backgroud_pictures/men1.jpg" alt="Men's lifestyle sneaker" />
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
