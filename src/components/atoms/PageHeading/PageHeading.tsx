import styles from '@/components/atoms/PageHeading/PageHeading.module.scss';

interface props {
  heading: string;
}
export function PageHeading({ heading }: props) {
  return <h1 className={styles.heading}>{heading}</h1>;
}
