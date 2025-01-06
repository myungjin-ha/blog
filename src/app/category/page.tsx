import Link from 'next/link';
import { getAllPosts } from '@/lib/api';

export default function CategoriesPage() {
    const allPosts = getAllPosts();
    const categories = Array.from(
        new Set(allPosts.map((post) => post.category).filter(Boolean))
    );
    return (
        <div>
            <h1>All Categories</h1>
            <ul>
                {categories.map((category) =>
                    category ?
                        (
                    <li key={category}>
                        <Link href={`/category/${category}`}>{category}</Link>
                    </li>
                ) : null)}
            </ul>
        </div>
    );
}