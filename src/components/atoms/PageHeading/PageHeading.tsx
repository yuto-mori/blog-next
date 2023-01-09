import Link from 'next/link';

import styles from '@/components/atoms/PageHeading/PageHeading.module.scss';

type props = {
  heading: string;
};
export function PageHeading({ heading }: props) {
  return (
    <h1 className={styles.heading}>
      <Link href="/article/">{heading}</Link>
    </h1>
  );
}
