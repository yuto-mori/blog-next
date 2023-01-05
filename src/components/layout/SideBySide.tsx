import { ReactNode } from 'react';

import styles from '@/components/layout/Layout.module.scss';
import { useAddClass } from '@/hooks/useAddClass';

type Props = {
  addClasses?: string[];
  children: ReactNode;
};

export function SideBySide({ addClasses, children }: Props) {
  const { addClass } = useAddClass();
  return (
    <div
      className={`${styles.layout} ${addClasses ? addClass(addClasses) : ''}`}
    >
      {children}
    </div>
  );
}
