"use client";

import { useCart } from "../components/CartContext";
import styles from "./Carrito.module.css";

export default function CarritoPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  return (
    <main className={styles.main}>
      <h1>Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img src={item.image} alt={item.name} className={styles.cartImage} />
                <div className={styles.cartInfo}>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <button onClick={() => removeFromCart(index)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>

          <button className={styles.clearButton} onClick={clearCart}>
            Vaciar Carrito
          </button>
        </>
      )}
    </main>
  );
}
