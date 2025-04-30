'use client';

import type React from 'react';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import styles from './product-filters.module.css';

const leagues = [
    { id: 'premier-league', name: 'Premier League' },
    { id: 'la-liga', name: 'La Liga' },
    { id: 'serie-a', name: 'Serie A' },
    { id: 'bundesliga', name: 'Bundesliga' },
    { id: 'ligue-1', name: 'Ligue 1' },
];

export default function ProductFilters() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

    const currentCategory = searchParams.get('category') || '';

    const handleCategoryChange = (category: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (category) {
            params.set('category', category);
        } else {
            params.delete('category');
        }

        router.push(`/products?${params.toString()}`);
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number.parseInt(e.target.value);
        const index = e.target.name === 'min' ? 0 : 1;
        const newRange = [...priceRange] as [number, number];
        newRange[index] = value;
        setPriceRange(newRange);
    };

    const applyPriceFilter = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('minPrice', priceRange[0].toString());
        params.set('maxPrice', priceRange[1].toString());
        router.push(`/products?${params.toString()}`);
    };

    return (
        <div className={styles.filters}>
            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Categories</h3>
                <ul className={styles.categoryList}>
                    <li>
                        <button
                            className={`${styles.categoryButton} ${
                                !currentCategory ? styles.active : ''
                            }`}
                            onClick={() => handleCategoryChange('')}
                        >
                            All Products
                        </button>
                    </li>
                    {leagues.map((league) => (
                        <li key={league.id}>
                            <button
                                className={`${styles.categoryButton} ${
                                    currentCategory === league.id
                                        ? styles.active
                                        : ''
                                }`}
                                onClick={() => handleCategoryChange(league.id)}
                            >
                                {league.name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Price Range</h3>
                <div className={styles.priceInputs}>
                    <div className={styles.priceInput}>
                        <label htmlFor="min-price">Min:</label>
                        <input
                            type="number"
                            id="min-price"
                            name="min"
                            min="0"
                            max="200"
                            value={priceRange[0]}
                            onChange={handlePriceChange}
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.priceInput}>
                        <label htmlFor="max-price">Max:</label>
                        <input
                            type="number"
                            id="max-price"
                            name="max"
                            min="0"
                            max="200"
                            value={priceRange[1]}
                            onChange={handlePriceChange}
                            className={styles.input}
                        />
                    </div>
                </div>
                <button
                    className={styles.applyButton}
                    onClick={applyPriceFilter}
                >
                    Apply
                </button>
            </div>
        </div>
    );
}
