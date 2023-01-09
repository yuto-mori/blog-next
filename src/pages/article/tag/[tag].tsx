import { ReactElement } from 'react';

import { Meta } from '@/components/common/Meta';
import { List } from '@/components/layout/List';
import { Card } from '@/components/organisms/Card/Card';
import { Pagination } from '@/components/organisms/Pagination/Pagination';
import { getAllPostsByTag, getAllTags, getPaths } from '@/lib/api';

type props = {
  posts: posts;
  totalCount: number;
};
type posts = {
  map(
    arg0: ({
      publishDate,
      title,
      slug,
      hero,
      tags,
    }: {
      publishDate: string;
      title: string;
      slug: string;
      hero: hero;
      tags: tag[];
    }) => JSX.Element
  ): ReactElement;
  publishDate: string;
  title: string;
  slug: string;
  hero: hero;
  tags: tag[];
};
type hero = {
  url: string;
  height: number;
  width: number;
};
type tag = {
  tagName: string;
  slug: string;
};
export default function Tag({ posts, totalCount }: props) {
  return (
    <>
      <div>
        <Meta pageTitle="ブログ" pageDesc="ブログ記事一覧" />
        <List
          posts={posts}
          addClasses={[
            'md:is-col-2',
            'md:is-col-gap-20',
            'is-row-gap-40',
            'md:is-row-gap-56',
          ]}
        >
          <Card
            tags={[
              {
                name: '',
                slug: '',
              },
            ]}
            title={''}
            slug={''}
            publishDate={''}
            hero={{
              url: '',
              width: 0,
              height: 0,
            }}
          />
        </List>
        <Pagination totalCount={totalCount} />
      </div>
    </>
  );
}
export const getStaticPaths = async () => {
  const paths = await getPaths('tag', 'article/tag');
  return { paths, fallback: false };
};

export async function getStaticProps(context: { params: { tag: string } }) {
  const tagSlug = context.params.tag;

  const allTags: { slug: string; id: string }[] = await getAllTags();
  const tag = allTags.find(({ slug }) => slug === tagSlug);

  if (tag) {
    const posts = await getAllPostsByTag(tag.id);
    return {
      props: {
        posts: posts?.posts,
        totalCount: posts?.totalCount,
      },
    };
  }
}
