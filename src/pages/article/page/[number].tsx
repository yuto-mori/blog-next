import { ReactElement } from 'react';

import { Meta } from '@/components/common/Meta';
import { List } from '@/components/layout/List';
import { Card } from '@/components/organisms/Card/Card';
import { Pagination } from '@/components/organisms/Pagination/Pagination';
import { getAllPosts, getPaths } from '@/lib/api';
import { perPage } from '@/utils/common';

type props = {
  posts: posts;
  totalCount: number;
};
type posts = {
  map(
    arg0: ({
      title,
      slug,
      hero,
    }: {
      title: string;
      slug: string;
      hero: hero;
    }) => JSX.Element
  ): ReactElement;
  title: string;
  slug: string;
  hero: hero;
};
type hero = {
  url: string;
  height: number;
  width: number;
};
export default function BlogPageNumber({ posts, totalCount }: props) {
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
            title={''}
            slug={''}
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

export async function getStaticPaths() {
  const paths = await getPaths(perPage);
  return { paths, fallback: false };
}

export async function getStaticProps(context: { params: { number: number } }) {
  const posts = await getAllPosts(
    perPage(),
    (context.params.number - 1) * perPage()
  );

  return {
    props: {
      posts: posts.contents,
      totalCount: posts.totalCount,
    },
  };
}
