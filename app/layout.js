import "./globals.css";
import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/sections.css";
import "../styles/products.css";
import "../styles/footer.css";
import "../styles/responsive.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "SHOESCO.",
  description: "Premium sneakers and luxury fragrances.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="page-wrapper">{children}</div>
      </body>
    </html>
  );
}
