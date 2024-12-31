import { getAllPosts } from '@/lib/api';

type Props = {
    params: { category: string };
};

export default function CategoryPage({ params }: Props) {
    const { category } = params;
    const allPosts = getAllPosts();
    const categoryPosts = allPosts.filter((post) => post.category === category);

    return (
        <div>
            <h1>Posts in "{category}"</h1>
            <ul>
                {categoryPosts.map((post) => (
                    <li key={post.slug}>
                        <a href={`/posts/${post.slug}`}>{post.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}