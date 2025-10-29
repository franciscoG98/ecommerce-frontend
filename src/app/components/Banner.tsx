"use client";

import { useState, useEffect } from "react";
import styles from "./Banner.module.css";

const slides = [
  { image: "/slider/slide1.jpg", title: "Colección Primavera", description: "Descubrí nuestras últimas prendas", buttonText: "Comprar", link: "/ofertas" },
  { image: "/slider/slide2.jpg", title: "Descuento 20% en ropa", description: "Solo por tiempo limitado", buttonText: "Ver Ofertas", link: "/ofertas" },
  { image: "/slider/slide3.jpg", title: "Nuevas gorras", description: "Comodidad y estilo para tu día a día", buttonText: "Comprar", link: "/ofertas" },
  { image: "/slider/slide4.jpg", title: "Accesorios exclusivos", description: "Complementa tu look", buttonText: "Ver colección", link: "/ofertas" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Auto slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.banner}>
      <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide}>
        &#10094;
      </button>

      <div className={styles.sliderContainer}>
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`${styles.slide} ${idx === current ? styles.activeSlide : ""}`}
          >
            <img src={slide.image} alt={slide.title} />
            <div className={styles.text}>
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <a href={slide.link} className={styles.button}>
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}>
        &#10095;
      </button>

      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`${styles.dot} ${idx === current ? styles.active : ""}`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
