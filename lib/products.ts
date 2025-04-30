export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    team: string;
    league: string;
    featured: boolean;
    inStock: boolean;
    sizes: string[];
};

export const products: Product[] = [
    {
        id: '1',
        name: 'Manchester United Home Jersey',
        description:
            'Official Manchester United home jersey for the current season. Made with breathable fabric for maximum comfort.',
        price: 89.99,
        image: '/camiseta-barca.webp?height=400&width=400',
        category: 'premier-league',
        team: 'Manchester United',
        league: 'Premier League',
        featured: true,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: '2',
        name: 'Barcelona Home Jersey',
        description:
            'Official FC Barcelona home jersey featuring the iconic blue and red stripes. Made with lightweight material.',
        price: 94.99,
        image: '/camiseta-barca.webp',
        category: 'la-liga',
        team: 'Barcelona',
        league: 'La Liga',
        featured: true,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: '3',
        name: 'Bayern Munich Home Jersey',
        description:
            'Official Bayern Munich home jersey in the traditional red color. Features moisture-wicking technology.',
        price: 89.99,
        image: '/camiseta-barca.webp?height=400&width=400',
        category: 'bundesliga',
        team: 'Bayern Munich',
        league: 'Bundesliga',
        featured: true,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: '4',
        name: 'Liverpool Away Jersey',
        description:
            'Official Liverpool away jersey for the current season. Sleek design with club crest.',
        price: 84.99,
        image: '/camiseta-barca.webp?height=400&width=400',
        category: 'premier-league',
        team: 'Liverpool',
        league: 'Premier League',
        featured: false,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: '5',
        name: 'Real Madrid Home Jersey',
        description:
            'Official Real Madrid home jersey in classic white. Elegant design with club emblem.',
        price: 94.99,
        image: '/camiseta-barca.webp?height=400&width=400',
        category: 'la-liga',
        team: 'Real Madrid',
        league: 'La Liga',
        featured: true,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: '6',
        name: 'Juventus Home Jersey',
        description:
            'Official Juventus home jersey with the iconic black and white stripes. Premium quality fabric.',
        price: 89.99,
        image: '/camiseta-barca.webp?height=400&width=400',
        category: 'serie-a',
        team: 'Juventus',
        league: 'Serie A',
        featured: true,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL'],
    },
    {
        id: '7',
        name: 'PSG Home Jersey',
        description:
            'Official Paris Saint-Germain home jersey. Modern design with club colors.',
        price: 94.99,
        image: '/camiseta-barca.webp?height=400&width=400',
        category: 'ligue-1',
        team: 'PSG',
        league: 'Ligue 1',
        featured: true,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    {
        id: '8',
        name: 'Manchester City Home Jersey',
        description:
            'Official Manchester City home jersey in sky blue. Lightweight and comfortable.',
        price: 89.99,
        image: '/camiseta-barca.webp?height=400&width=400',
        category: 'premier-league',
        team: 'Manchester City',
        league: 'Premier League',
        featured: false,
        inStock: true,
        sizes: ['S', 'M', 'L', 'XL'],
    },
];

export function getFeaturedProducts(): Product[] {
    return products.filter((product) => product.featured);
}

export function getAllProducts(): Product[] {
    return products;
}

export function getProductById(id: string): Product | undefined {
    return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
    return products.filter((product) => product.category === category);
}

export function getProductsByLeague(league: string): Product[] {
    return products.filter((product) => product.league === league);
}
