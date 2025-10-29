"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">ClotheShop</Link>
      </div>

      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/ofertas">Ofertas</Link></li>
        <li><Link href="/acerca">Acerca de</Link></li>
        <li><Link href="/atencion">Atención</Link></li>
        <li><Link href="/carrito">Carrito</Link></li>
      </ul>

      <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
}
