import Link from "next/link"
import FeaturedProducts from "@/components/featured-products"
import HeroSection from "@/components/hero-section"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured T-Shirts</h2>
          <FeaturedProducts />
          <div className={styles.viewAllContainer}>
            <Link href="/products" className={styles.viewAllButton}>
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
