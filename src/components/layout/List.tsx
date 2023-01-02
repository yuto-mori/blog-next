import { cloneElement, ReactElement } from 'react';

import { addClass } from '@/utils/common';
// cloneElement を使うときは children の型は ReactElement しか使えないので、ここだけ ReactNode ではない

type props = {
  posts: posts;
  addClasses: string[];
  children: ReactElement;
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

export function List({ posts, addClasses, children }: props) {
  const newChildren = (item: { title: string; slug: string; hero: hero }) =>
    cloneElement(children, item);
  return (
    <ul className={`d-grid ${addClasses ? addClass(addClasses) : ''}`}>
      {posts.map((item) => (
        <li key={item.slug}>{newChildren(item)}</li>
      ))}
    </ul>
  );
}
