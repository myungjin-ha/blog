import { getAllPosts } from "@/lib/api";
import {PostPreview} from "@/app/_components/post-preview";

export default async function PostsPage() {
    const posts = getAllPosts(); // 모든 포스트 데이터 가져오기

    return (
        <div>
            <h1>All Posts</h1>
            <div>
                {posts.map((post) => (
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
            </div>
        </div>
    );
}