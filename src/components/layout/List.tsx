import { ReactNode } from 'react';

type props = {
  children: ReactNode;
};
export function List({ children }: props) {
  return (
    <ul className="d-grid md:is-col-2 md:is-col-gap-20">
      <li>{children}</li>
    </ul>
  );
}
