"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/hooks/use-cart"
import styles from "./add-to-cart-button.module.css"

interface AddToCartButtonProps {
  product: Product
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const { addItem } = useCart()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity,
      selectedSize,
    })
  }

  return (
    <div className={styles.addToCart}>
      <div className={styles.quantitySelector}>
        <button className={styles.quantityButton} onClick={decreaseQuantity} disabled={quantity <= 1}>
          -
        </button>
        <span className={styles.quantity}>{quantity}</span>
        <button className={styles.quantityButton} onClick={increaseQuantity}>
          +
        </button>
      </div>

      <button className={styles.addToCartButton} onClick={handleAddToCart}>
        <ShoppingCart size={20} />
        Add to Cart
      </button>
    </div>
  )
}
