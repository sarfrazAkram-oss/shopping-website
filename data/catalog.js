export const catalogItems = [
  {
    name: "AirMax Pro X",
    category: "sneakers",
    price: "$130",
    image: "/images/trending-airmax.jpg",
    action: "Add to Cart",
    featured: true,
  },
  {
    name: "Miraj",
    category: "perfumes",
    price: "$35",
    image: "/images/trending-miraj.jpg",
    action: "Shop Now",
    featured: true,
  },
  {
    name: "AirFlex",
    category: "sneakers",
    price: "$135",
    image: "/images/trending-airflex.jpg",
    action: "Add to Cart",
    featured: true,
  },
  {
    name: "Noir Essence",
    category: "perfumes",
    price: "$35",
    image: "/images/trending-noir.jpg",
    action: "Add to Cart",
    featured: true,
  },
  {
    name: "Luxe Runner",
    category: "sneakers",
    price: "$150",
    image: "/images/luxe-runner.jpg",
    action: "Add to Cart",
    featured: false,
  },
  {
    name: "Golden Aura",
    category: "perfumes",
    price: "$55",
    image: "/images/golden-aura.jpg",
    action: "Shop Now",
    featured: false,
  },
];

export const featuredProducts = catalogItems.filter((item) => item.featured);
