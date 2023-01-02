import { ReactElement } from 'react';

import { Meta } from '@/components/common/Meta';
import { List } from '@/components/layout/List';
import { Card } from '@/components/organisms/Card/Card';
import { getAllPosts } from '@/lib/api';

type props = {
  posts: posts;
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
export default function BlogTop({ posts }: props) {
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
            url={''}
            hero={{
              url: '',
              width: 0,
              height: 0,
            }}
          />
        </List>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
