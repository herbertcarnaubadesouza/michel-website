import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>Soccer Tees</h3>
            <p className={styles.description}>The best collection of soccer t-shirts for fans around the world.</p>
            <div className={styles.social}>
              <Link href="https://facebook.com" className={styles.socialLink}>
                <Facebook size={20} />
              </Link>
              <Link href="https://twitter.com" className={styles.socialLink}>
                <Twitter size={20} />
              </Link>
              <Link href="https://instagram.com" className={styles.socialLink}>
                <Instagram size={20} />
              </Link>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Shop</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/products">All Products</Link>
              </li>
              <li>
                <Link href="/products?category=premier-league">Premier League</Link>
              </li>
              <li>
                <Link href="/products?category=la-liga">La Liga</Link>
              </li>
              <li>
                <Link href="/products?category=serie-a">Serie A</Link>
              </li>
              <li>
                <Link href="/products?category=bundesliga">Bundesliga</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.links}>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/shipping">Shipping</Link>
              </li>
              <li>
                <Link href="/returns">Returns</Link>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Newsletter</h4>
            <p className={styles.newsletterText}>Subscribe to get special offers, free giveaways, and new arrivals.</p>
            <form className={styles.form}>
              <input type="email" placeholder="Your email" className={styles.input} required />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} Soccer Tees. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
