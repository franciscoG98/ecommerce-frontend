"use client";

import { useState } from "react";
import { useCart } from "./CartContext";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart()

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">ClotheShop</Link>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/ofertas">Ofertas</Link></li>
        <li><Link href="/acerca">Acerca de</Link></li>
        <li><Link href="/atencion">Atención al Cliente</Link></li>
        <li>
          <Link href="/carrito" className={styles.cartLink}>
            <FaShoppingCart style={{ marginRight: "5px" }} />
            Carrito
            {cartItems.length > 0 && (
              <span className={styles.badge_cart_navbar}>
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
}

