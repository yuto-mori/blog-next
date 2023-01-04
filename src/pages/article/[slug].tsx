import { client } from '@/lib/api';

export default function DetailPage({ title }: { title: string }) {
  return <p>{`${title}`}</p>;
}

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'blogs' });

  const paths = data.contents.map(
    (content: { slug: string }) => `/article/${content.slug}`
  );
  return { paths, fallback: false };
};

export const getStaticProps = async (context: { params: { slug: string } }) => {
  const slug = context.params.slug;
  const post = await client.get({
    endpoint: 'blogs',
    queries: { filters: `slug[equals]${slug}` },
  });
  return {
    props: {
      title: post.contents[0].title,
    },
  };
};
