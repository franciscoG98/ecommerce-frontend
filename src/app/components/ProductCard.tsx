"use client";

import styles from "./ProductCard.module.css";
import { useRouter } from "next/navigation";
import { useCart } from "../components/CartContext";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  discount?: boolean;
}

export default function ProductCard({ name, price, image, discount }: ProductCardProps) {
  const router = useRouter();
  const { addToCart } = useCart();

  const handleComprar = () => {
    addToCart({ name, price, image }); // agrega producto al carrito
    router.push("/carrito"); // redirige después de agregar
  };

  return (
    <div className={styles.card}>
      {discount && <div className={styles.discountBadge}>20% OFF</div>}
      <img src={image} alt={name} className={styles.productImage} />
      <h3 className={styles.productName}>{name}</h3>
      <p className={styles.productPrice}>{price}</p>
      <button className={styles.buyButton} onClick={handleComprar}>
        Comprar
      </button>
    </div>
  );
}
