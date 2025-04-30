import { getProductsByLeague } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import styles from './product-recommendations.module.css';

interface ProductRecommendationsProps {
    currentProductId: string;
    league: string;
}

export default function ProductRecommendations({
    currentProductId,
    league,
}: ProductRecommendationsProps) {
    const products = getProductsByLeague(league)
        .filter((product) => product.id !== currentProductId)
        .slice(0, 4);

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
                            width={300}
                            height={300}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.name}>{product.name}</h3>
                        <p className={styles.price}>
                            ${product.price.toFixed(2)}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
