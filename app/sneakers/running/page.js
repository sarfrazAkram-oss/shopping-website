import CategoryPage from "../[category]/page";

export default function RunningSneakersPage() {
  return CategoryPage({ params: { category: "running" } });
}
