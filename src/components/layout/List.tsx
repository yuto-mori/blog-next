import { cloneElement, ReactElement } from 'react';
// cloneElement を使うときは children の型は ReactElement しか使えないので、ここだけ ReactNode ではない

type props = {
  posts: posts;
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

export function List({ posts, children }: props) {
  const newChildren = (item: { title: string; slug: string; hero: hero }) =>
    cloneElement(children, item);
  return (
    <ul className="d-grid md:is-col-2 md:is-col-gap-20">
      {posts.map((item) => (
        <li key={item.slug}>{newChildren(item)}</li>
      ))}
    </ul>
  );
}
