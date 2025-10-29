"use client";

import { useCart } from "./CartContext";
import styles from "./ProductCard.module.css";
import { FaShoppingCart } from "react-icons/fa";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  discount?: string; // opcional, por ejemplo "20%"
}

export default function ProductCard({ title, price, image, discount }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ name: title, price, image });
    alert(`"${title}" se agregó al carrito ✅`);
  };

  return (
    <div className={styles.card}>
      {discount && <div className={styles.discountBadge}>{discount} OFF</div>}
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.productImage} />
      </div>

      <h3 className={styles.productName}>{title}</h3>
      <p className={styles.productPrice}>{price}</p>

      <button onClick={handleAddToCart} className={styles.addToCartButton}>
        <FaShoppingCart style={{ marginRight: 8 }} /> Agregar al carrito
      </button>
    </div>
  );
}
