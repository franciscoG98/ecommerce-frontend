"use client";

import { useState } from "react";
import styles from "./Navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="/">ClotheShop</a>
      </div>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ""}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/ofertas">Ofertas</a></li>
        <li><a href="/acerca">Acerca de</a></li>
        <li><a href="/atencion">Atención al Cliente</a></li>
        <li>
          <a href="/carrito" className={styles.cartLink}>
            <FaShoppingCart style={{ marginRight: "5px" }} />
            Carrito
          </a>
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

