import AddToCartButton from '@/components/add-to-cart-button';
import ProductRecommendations from '@/components/product-recommendations';
import { getProductById } from '@/lib/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './product.module.css';

export default function ProductPage({ params }: { params: { id: string } }) {
    const product = getProductById(params.id);

    if (!product) {
        notFound();
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.productLayout}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={product.image || '/camiseta-barca.webp'}
                            alt={product.name}
                            width={600}
                            height={600}
                            className={styles.image}
                            priority
                        />
                    </div>

                    <div className={styles.details}>
                        <h1 className={styles.name}>{product.name}</h1>
                        <p className={styles.team}>
                            {product.team} | {product.league}
                        </p>
                        <p className={styles.price}>
                            ${product.price.toFixed(2)}
                        </p>

                        <div className={styles.description}>
                            <h3 className={styles.sectionTitle}>Description</h3>
                            <p>{product.description}</p>
                        </div>

                        <div className={styles.sizeSelector}>
                            <h3 className={styles.sectionTitle}>Select Size</h3>
                            <div className={styles.sizeOptions}>
                                {product.sizes.map((size) => (
                                    <button
                                        key={size}
                                        className={styles.sizeButton}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AddToCartButton product={product} />
                    </div>
                </div>

                <section className={styles.recommendations}>
                    <h2 className={styles.recommendationsTitle}>
                        You May Also Like
                    </h2>
                    <ProductRecommendations
                        currentProductId={product.id}
                        league={product.league}
                    />
                </section>
            </div>
        </main>
    );
}
