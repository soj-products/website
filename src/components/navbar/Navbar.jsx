// components/Navbar.js
import Link from "next/link"; // Import Next.js Link
import styles from "@/public/styles/Navbar.module.css";
import Cart from "@/src/components/cart/Cart"; // Import the Cart component

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">MyLogo</Link>
      </div>

      {/* Nav links */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/team">Team</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Cart component */}
      <Cart />
    </nav>
  );
}
