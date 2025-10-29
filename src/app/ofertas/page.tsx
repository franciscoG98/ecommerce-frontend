"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../components/CartContext";
import styles from "./Ofertas.module.css";

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export default function Ofertas() {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // si querés usarlo aquí, pero ProductCard lo maneja

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data: Product[]) => {
        const clothing = data.filter(
          p => p.category === "men's clothing" || p.category === "women's clothing"
        );
        // 5 en oferta
        setProducts(clothing.slice(0, 5));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Ofertas Especiales - 20% OFF</h2>
      <div className={styles.productGrid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={`$${(product.price * 0.8).toFixed(2)}`}
            image={product.image}
            discount={"20%"}
          />
        ))}
      </div>
    </main>
  );
}
