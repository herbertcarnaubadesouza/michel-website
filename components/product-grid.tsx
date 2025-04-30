import type { Product } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product-grid.module.css';

interface ProductGridProps {
    products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
    return (
        <div className={styles.grid}>
            {products.map((product) => (
                <Link
                    href={`/products/${product.id}`}
                    key={product.id}
                    className={styles.productCard}
                >
                    <div className={styles.imageContainer}>
                        <Image
                            src={product.image || '/camiseta-barca.webp'}
                            alt={product.name}
                            width={400}
                            height={400}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.name}>{product.name}</h3>
                        <p className={styles.team}>{product.team}</p>
                        <p className={styles.price}>
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
