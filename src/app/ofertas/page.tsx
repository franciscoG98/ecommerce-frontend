"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import styles from "../page.module.css"; // usamos el mismo estilo de grid de productos

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function OfertasPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Traemos todos los productos
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data: Product[]) => {
        // Filtramos solo ropa y accesorios
        const filtered = data.filter(
          p =>
            p.category === "men's clothing" ||
            p.category === "women's clothing" ||
            p.category === "jewelery"
        );
        setProducts(filtered);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.products}>
        <h2>Ofertas Destacadas</h2>
        {products.length === 0 ? (
          <p>Cargando productos...</p>
        ) : (
          <div className={styles.productGrid}>
            {products.map(product => (
              <ProductCard
                key={product.id}
                name={product.title}
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
