'use client';

import { useCart } from '@/hooks/use-cart';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './cart.module.css';

export default function CartPage() {
    const { items, removeItem, updateQuantity, totalPrice } = useCart();

    if (items.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h1 className={styles.title}>Your Cart</h1>
                <p className={styles.emptyMessage}>Your cart is empty</p>
                <Link
                    href="/products"
                    className={styles.continueShoppingButton}
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>Your Cart</h1>

                <div className={styles.cartLayout}>
                    <div className={styles.cartItems}>
                        {items.map((item) => (
                            <div
                                key={`${item.id}-${item.selectedSize}`}
                                className={styles.cartItem}
                            >
                                <div className={styles.itemImage}>
                                    <Image
                                        src={
                                            item.image || '/camiseta-barca.webp'
                                        }
                                        alt={item.name}
                                        width={120}
                                        height={120}
                                    />
                                </div>

                                <div className={styles.itemDetails}>
                                    <h3 className={styles.itemName}>
                                        {item.name}
                                    </h3>
                                    <p className={styles.itemTeam}>
                                        {item.team}
                                    </p>
                                    {item.selectedSize && (
                                        <p className={styles.itemSize}>
                                            Size: {item.selectedSize}
                                        </p>
                                    )}
                                </div>

                                <div className={styles.itemQuantity}>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                Math.max(1, item.quantity - 1)
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                    <span className={styles.quantity}>
                                        {item.quantity}
                                    </span>
                                    <button
                                        className={styles.quantityButton}
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <div className={styles.itemPrice}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>

                                <button
                                    className={styles.removeButton}
                                    onClick={() => removeItem(item.id)}
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className={styles.orderSummary}>
                        <h2 className={styles.summaryTitle}>Order Summary</h2>

                        <div className={styles.summaryRow}>
                            <span>Subtotal</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>

                        <div className={styles.summaryRow}>
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>

                        <div className={styles.summaryRow}>
                            <span>Tax</span>
                            <span>${(totalPrice * 0.1).toFixed(2)}</span>
                        </div>

                        <div className={styles.summaryTotal}>
                            <span>Total</span>
                            <span>${(totalPrice * 1.1).toFixed(2)}</span>
                        </div>

                        <button className={styles.checkoutButton}>
                            Proceed to Checkout
                        </button>

                        <Link
                            href="/products"
                            className={styles.continueShoppingLink}
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
