import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { getAllPosts } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const randomIndex = Math.floor(Math.random() * allPosts.length);

  const heroPost = allPosts[randomIndex];

  return (
    <main>
      <Container
      // this component is just for layout
      >
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          slug={heroPost.slug}
        />
      </Container>
    </main>
  );
}
