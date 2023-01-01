import styles from '@/components/atoms/Text/Text.module.scss';

type props = {
  text: string;
};

export function Text({ text }: props) {
  return <p className={styles.text}>{text}</p>;
}
