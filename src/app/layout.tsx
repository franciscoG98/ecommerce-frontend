import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "./components/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Mi Tienda Online",
  description: "Tienda de ropa y accesorios con carrito de compras",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const NAVBAR_HEIGHT = 72; // altura del navbar

  return (
    <html lang="es">
      <body>
        <CartProvider>
          <Navbar />
          <main style={{ flex: 1, paddingTop: `${NAVBAR_HEIGHT}px` }}>
            {children}
          </main>
          <Footer />
        </CartProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
