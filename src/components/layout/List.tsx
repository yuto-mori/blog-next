import { cloneElement, ReactElement } from 'react';

import { useAddClass } from '@/hooks/useAddClass';

// import { addClass } from '@/utils/common';
// cloneElement を使うときは children の型は ReactElement しか使えないので、ここだけ ReactNode ではない

type props = {
  posts: posts;
  addClasses: string[];
  children: ReactElement;
};
type posts = {
  map(
    arg0: ({
      publishDate,
      title,
      slug,
      hero,
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
export function List({ posts, addClasses, children }: props) {
  const { addClass } = useAddClass();

  const newChildren = (item: {
    title: string;
    slug: string;
    hero: hero;
    publishDate: string;
    tags: tag[];
  }) => cloneElement(children, item);
  return (
    <ul className={`d-grid ${addClasses ? addClass(addClasses) : ''}`}>
      {posts.map((item) => (
        <li key={item.slug}>{newChildren(item)}</li>
      ))}
    </ul>
  );
}
