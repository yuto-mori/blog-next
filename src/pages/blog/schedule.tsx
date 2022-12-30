import { getPostBySlug } from '@/lib/api';

interface contents {
  title: string;
  publish: string;
  content: string;
  hero: hero;
  tags: tags[];
}
interface hero {
  url: string;
  height: number;
  width: number;
}
interface tags {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  slug: string;
}

export default function Schedule({
  title,
  publish,
  content,
  hero,
  tags,
}: contents) {
  return <h1> {title} </h1>;
}

export async function getStaticProps() {
  const slug = 'eldenring0';
  const post = await getPostBySlug(slug);

  return {
    props: {
      title: post.title,
      publish: post.publishDate,
      content: post.content,
      hero: post.hero,
      tags: post.tags,
    },
  };
}
