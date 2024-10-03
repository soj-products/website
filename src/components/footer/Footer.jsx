import styles from "@/public/styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        {/* Logo and Tagline */}
        <div className={styles.footerCol}>
          <div className={styles.logoWrapper}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/images/logo.png"
                alt="Logo | Krishaka Agritech"
                layout="responsive"
                width={100}
                height={100}
                className={styles.logoImage}
              />
            </Link>
            <h2 className={styles.footerTitle}>Krishaka</h2>
          </div>
          <h3 className={styles.tagline}>Where farming meets technology!</h3>
        </div>

        {/* Social Media Links */}
        <div className={styles.footerCol}>
          <span className={styles.socialTitle}>Follow Us</span>
          <div className={styles.socialLinks}>
            <Link href="https://www.instagram.com/krishaka_agrow/" title="instagram" aria-label="instagram">
              <svg className={styles.icon} /* SVG code for Instagram */></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/krishaka-agrow-268735294/" title="linkedIn" aria-label="linkedIn">
              <svg className={styles.icon} /* SVG code for LinkedIn */></svg>
            </Link>
          </div>
        </div>

        {/* Products Section */}
        <div className={styles.footerCol}>
          <h3 className={styles.sectionTitle}>Our Products</h3>
          <nav className={styles.navLinks}>
            <Link href="/products/product-one" className={styles.footerLink}>product one</Link>
            <Link href="/products/product-two" className={styles.footerLink}>product two</Link>
            <Link href="/products/product-three" className={styles.footerLink}>product three</Link>
          </nav>
        </div>

        {/* Sitemap Section */}
        <div className={styles.footerCol}>
          <h3 className={styles.sectionTitle}>Sitemap</h3>
          <nav className={styles.navLinks}>
            <Link href="/" className={styles.footerLink}>home</Link>
            <Link href="/about" className={styles.footerLink}>about</Link>
            <Link href="/products" className={styles.footerLink}>products</Link>
            <Link href="/team" className={styles.footerLink}>team</Link>
            <Link href="/contact" className={styles.footerLink}>contact</Link>
          </nav>
        </div>

        {/* Contact Information */}
        <div className={styles.footerCol}>
          <a className={styles.contactLink} href="mailto:mpavoperations@gmail.com">
            <svg className={styles.icon} /* SVG for email */></svg>
            <span>mpavoperations@gmail.com</span>
          </a>
          <a className={styles.contactLink} href="tel:+91-9840046978">
            <svg className={styles.icon} /* SVG for phone */></svg>
            <span>+91-9840046978</span>
          </a>
          <a className={styles.contactLink} href="https://maps.app.goo.gl/Ygxiev8kasDtmjDYA">
            <svg className={styles.icon} /* SVG for location */></svg>
            <span>Nirmaan, Sudha Sankar Innovation Hub, IIT Madras, Chennai, 600036</span>
          </a>
        </div>
      </div>
      <h2 className={styles.footerBottomText}>Krishaka</h2>
    </footer>
  );
}
