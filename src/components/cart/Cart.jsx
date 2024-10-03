// components/Cart.js
"use client"
import { useState } from 'react';
import styles from '@/public/styles/Cart.module.css'; // Create Cart module CSS

export default function Cart() {
  const [cartOpen, setCartOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div className={styles.cart} onClick={toggleCart}>
      <span className={styles.cartIcon}>🛒</span>
      {cartOpen && (
        <div className={`${styles.cartDropdown} ${cartOpen ? styles.active : ''}`}>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
