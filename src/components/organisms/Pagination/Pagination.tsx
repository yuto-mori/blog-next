import Link from 'next/link';

import { perPage } from '@/utils/common';

type props = {
  totalCount: number;
};

export function Pagination({ totalCount }: props) {
  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul>
      {range(1, Math.ceil(totalCount / perPage())).map((number, index) => (
        <li key={index}>
          <Link href={`/blog/page/${number}`}>{number}</Link>
        </li>
      ))}
    </ul>
  );
}
