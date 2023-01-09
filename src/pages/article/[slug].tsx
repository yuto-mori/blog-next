import { getPaths, getPost } from '@/lib/api';

export default function DetailPage({ title }: { title: string }) {
  return <p>{`${title}`}</p>;
}

export const getStaticPaths = async () => {
  const paths = await getPaths('article', 'article');
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const post = await getPost(context.params.slug);
  return {
    props: {
      title: post.contents[0].title,
    },
  };
};
