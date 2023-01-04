import Link from 'next/link';

import styles from '@/components/atoms/PageHeading/PageHeading.module.scss';

type props = {
  heading: string;
};
export function PageHeading({ heading }: props) {
  return (
    <Link href="/blog02/">
      <h1 className={styles.heading}>{heading}</h1>
    </Link>
  );
}
