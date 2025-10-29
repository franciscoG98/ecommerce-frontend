"use client";

import { useState } from "react";
import styles from "./Banner.module.css";

const slides = [
  { image: "/slider/slide1.jpg", title: "Colección Primavera", description: "Descubrí nuestras últimas prendas", buttonText: "Comprar", link: "/ofertas" },
  { image: "/slider/slide2.jpg", title: "Descuento 20% en ropa", description: "Solo por tiempo limitado", buttonText: "Ver Ofertas", link: "/ofertas" },
  { image: "/slider/slide3.jpg", title: "Nuevas gorras", description: "Comodidad y estilo para tu día a día", buttonText: "Comprar", link: "/ofertas" },
  { image: "/slider/slide4.jpg", title: "Accesorios exclusivos", description: "Complementa tu look", buttonText: "Ver colección", link: "/ofertas" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className={styles.banner}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>&#10094;</button>

      <div className={styles.slide}>
        <img src={slides[current].image} alt={slides[current].title} />
        <div className={styles.text}>
          <h2>{slides[current].title}</h2>
          <p>{slides[current].description}</p>
          <a href={slides[current].link} className={styles.button}>{slides[current].buttonText}</a>
        </div>
      </div>

      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>&#10095;</button>

      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span key={idx} className={`${styles.dot} ${idx === current ? styles.active : ""}`} onClick={() => setCurrent(idx)}></span>
        ))}
      </div>
    </div>
  );
}
