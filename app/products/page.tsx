import { getAllProducts } from "@/lib/products"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import styles from "./products.module.css"

export default function ProductsPage() {
  const products = getAllProducts()

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>All Products</h1>

        <div className={styles.layout}>
          <aside className={styles.sidebar}>
            <ProductFilters />
          </aside>

          <div className={styles.products}>
            <ProductGrid products={products} />
          </div>
        </div>
      </div>
    </main>
  )
}
