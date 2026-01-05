import "./globals.css";
import "../styles/navbar.css";
import "../styles/hero.css";
import "../styles/sections.css";
import "../styles/products.css";
import "../styles/responsive.css";
import "../styles/footer.css";
import "../styles/cart.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartProvider } from "../components/CartProvider";
import CartPreview from "../components/CartPreview";
import NotificationsPanel from "../components/NotificationsPanel";

export const metadata = {
  title: "SHOESCO.",
  description: "Premium sneakers and luxury fragrances.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <div className="page-wrapper">{children}</div>
          <Footer />
          <CartPreview />
          <NotificationsPanel />
        </CartProvider>
      </body>
    </html>
  );
}
