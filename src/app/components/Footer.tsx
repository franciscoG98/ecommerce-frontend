"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <h4>Empresa</h4>
          <ul>
            <li><Link href="/acerca">Acerca de nosotros</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Soporte</h4>
          <ul>
            <li><Link href="/atencion">Contacto</Link></li>
            <li><Link href="#">FAQs</Link></li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Redes</h4>
          <ul>
            <li><Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</Link></li>
            <li><Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</Link></li>
            <li><Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</Link></li>
          </ul>
        </div>
      </div>
      <p className={styles.copy}>© 2025 ClotheShop. Todos los derechos reservados.</p>
    </footer>
  );
}
