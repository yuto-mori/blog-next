import { getPostBySlug } from '@/lib/api';

type contents = {
  title: string;
  publish: string;
  content: string;
  hero: hero;
  tags: tags[];
};
type hero = {
  url: string;
  height: number;
  width: number;
};
type tags = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  slug: string;
};

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
