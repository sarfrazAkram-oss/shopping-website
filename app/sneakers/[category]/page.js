import Link from "next/link";
import { notFound } from "next/navigation";
import "../../../styles/sneakers.css";

const categoryConfigs = {
  men: {
    eyebrow: "Men's Collection",
    heading: "Men's Sneakers Collection",
    description: "Tailored performance aur refined aesthetics jo har men's wardrobe ko elevate karein.",
    cta: "Shop Men's",
    heroImage: "/images/shoes/shoes2.jfif",
    gridTitle: "Men's Highlights",
    gridDescription: "Signature leather trainers, hybrid runners aur statement silhouettes.",
    products: [
      { name: "Atlas Prime", price: "$162" },
      { name: "Summit Runner", price: "$170" },
      { name: "Urban Monarch", price: "$158" },
      { name: "Forge Flex", price: "$165" },
      { name: "Arc Vanguard", price: "$171" },
      { name: "Terra Glide", price: "$156" },
      { name: "Noir Circuit", price: "$168" },
      { name: "Polar Apex", price: "$174" },
      { name: "Metro Shift", price: "$160" },
      { name: "VeloCraft", price: "$166" },
      { name: "Magnum Pace", price: "$172" },
      { name: "Crown Sprint", price: "$169" },
    ],
  },
  women: {
    eyebrow: "Women's Collection",
    heading: "Women's Premium Sneakers",
    description: "Luxury finishes aur graceful contours jo everyday glamour ko effortless banayein.",
    cta: "Shop Women's",
    heroImage: "/images/shoes/shoes4.jfif",
    gridTitle: "Women's Highlights",
    gridDescription: "Luxe knit uppers, metallic accents aur feather-light cushioning.",
    products: [
      { name: "Luna Bloom", price: "$158" },
      { name: "Silk Horizon", price: "$164" },
      { name: "Aurora Drift", price: "$155" },
      { name: "Velvet Wave", price: "$170" },
      { name: "Pearl Motion", price: "$168" },
      { name: "Glam Swift", price: "$162" },
      { name: "Opal Glide", price: "$159" },
      { name: "Rose Eclipse", price: "$167" },
      { name: "Ivory Pulse", price: "$172" },
      { name: "Dusk Allure", price: "$160" },
      { name: "Fleur Pace", price: "$166" },
      { name: "Charm Sprint", price: "$171" },
    ],
  },
  running: {
    eyebrow: "Running Collection",
    heading: "Running Performance Sneakers",
    description: "Responsive cushioning aur aerodynamic support jo har mile ko lighter banayein.",
    cta: "Shop Running",
    heroImage: "/images/shoes/shoes2.jfif",
    gridTitle: "Performance Picks",
    gridDescription: "Carbon-infused plates, energy return foams aur breathable mesh uppers.",
    products: [
      { name: "Velocity Surge", price: "$176" },
      { name: "Pace Reactor", price: "$168" },
      { name: "Circuit Sprint", price: "$170" },
      { name: "Glide Nova", price: "$166" },
      { name: "Aero Reactor", price: "$174" },
      { name: "Pulse Drive", price: "$169" },
      { name: "Stride Helix", price: "$172" },
      { name: "Momentum Flow", price: "$165" },
      { name: "Tempo Charge", price: "$170" },
      { name: "Catalyst Rush", price: "$177" },
      { name: "Rev Sprint", price: "$163" },
      { name: "Edge Propel", price: "$175" },
    ],
  },
  casual: {
    eyebrow: "Casual Collection",
    heading: "Casual Everyday Sneakers",
    description: "Understated silhouettes aur plush comfort jo har din ko effortless rakhein.",
    cta: "Shop Casual",
    heroImage: "/images/shoes/shoes4.jfif",
    gridTitle: "Casual Essentials",
    gridDescription: "Muted palettes, cushioned footbeds aur premium craftsmanship.",
    products: [
      { name: "Harbor Ease", price: "$154" },
      { name: "Canvas Luxe", price: "$150" },
      { name: "Daily Crest", price: "$158" },
      { name: "Breeze Route", price: "$152" },
      { name: "Softline Drift", price: "$149" },
      { name: "Gentle Pace", price: "$155" },
      { name: "Comfy Circuit", price: "$157" },
      { name: "Loft Glide", price: "$151" },
      { name: "Zen Stride", price: "$153" },
      { name: "Urban Ease", price: "$156" },
      { name: "Cozy Shift", price: "$150" },
      { name: "Calm Motion", price: "$152" },
    ],
  },
};

const baseFilterLinks = [
  { href: "/sneakers", label: "All" },
  { href: "/sneakers/men", label: "Men" },
  { href: "/sneakers/women", label: "Women" },
  { href: "/sneakers/running", label: "Running" },
  { href: "/sneakers/casual", label: "Casual" },
];

export function generateStaticParams() {
  return Object.keys(categoryConfigs).map((category) => ({ category }));
}

function getFilterLinks(activeCategory) {
  return baseFilterLinks.map((link) => ({
    ...link,
    isActive: link.href.endsWith(`/${activeCategory}`),
  }));
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const config = categoryConfigs[category];

  if (!config) {
    notFound();
  }

  const filterLinks = getFilterLinks(category);

  return (
    <main className="sneakers-page">
      <section className="sneaker-hero">
        <div className="sneaker-hero__content">
          <span className="sneaker-hero__eyebrow">{config.eyebrow}</span>
          <h1>{config.heading}</h1>
          <p>{config.description}</p>
          <button className="sneaker-hero__cta" type="button">{config.cta}</button>
        </div>
        <div className="sneaker-hero__visual">
          <div className="sneaker-hero__image-frame">
            <img src={config.heroImage} alt={config.heading} />
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
          <h2>{config.gridTitle}</h2>
          <p>{config.gridDescription}</p>
        </div>
        <div className="sneaker-grid">
          {config.products.map((product) => (
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
