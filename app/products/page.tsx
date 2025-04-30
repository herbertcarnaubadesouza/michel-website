import ProductFilters from '@/components/product-filters';
import ProductGrid from '@/components/product-grid';
import { getAllProducts } from '@/lib/products';
import { Suspense } from 'react';
import styles from './products.module.css';

export default function ProductsPage() {
    const products = getAllProducts();

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>All Products</h1>

                <div className={styles.layout}>
                    <aside className={styles.sidebar}>
                        <Suspense fallback={<div>Loading filters...</div>}>
                            <ProductFilters />
                        </Suspense>
                    </aside>

                    <div className={styles.products}>
                        <ProductGrid products={products} />
                    </div>
                </div>
            </div>
        </main>
    );
}
