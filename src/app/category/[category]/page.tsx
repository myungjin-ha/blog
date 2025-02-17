import { getAllPosts } from '@/lib/api';
import {PostPreview} from "@/app/_components/post-preview";

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
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={post.coverImage}
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </ul>
        </div>
    );
}