"use client";

import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import styles from "./page.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data: Product[]) => {
        const clothing = data.filter(
          p => p.category === "men's clothing" || p.category === "women's clothing"
        );
        setProducts(clothing.slice(0, 10)); // mostramos primero 10 prendas
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className={styles.main} style={{ paddingTop: 0 }}>
      <Banner />

      <section className={styles.products}>
        <h2>Productos Destacados</h2>

        {products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div className={styles.productGrid}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={`$${product.price.toFixed(2)}`}
                image={product.image}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

