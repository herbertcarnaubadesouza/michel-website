import Image from 'next/image';
import Link from 'next/link';
import styles from './hero-section.module.css';

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        Wear Your Team's Colors with Pride
                    </h1>
                    <p className={styles.subtitle}>
                        Discover our premium collection of soccer t-shirts from
                        top leagues around the world
                    </p>
                    <div className={styles.buttons}>
                        <Link href="/products" className={styles.primaryButton}>
                            Shop Now
                        </Link>
                        <Link
                            href="/collections"
                            className={styles.secondaryButton}
                        >
                            View Collections
                        </Link>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="/camiseta-barca.webp?height=600&width=600"
                        alt="Soccer T-Shirts Collection"
                        width={600}
                        height={600}
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
