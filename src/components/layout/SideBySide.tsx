import { ReactNode } from 'react';

import styles from '@/components/layout/Layout.module.scss';
import { addClass } from '@/utils/common';

type Props = {
  addClasses?: string[];
  children: ReactNode;
};

export function SideBySide({ addClasses, children }: Props) {
  return (
    <div
      className={`${styles.layout} ${addClasses ? addClass(addClasses) : ''}`}
    >
      {children}
    </div>
  );
}
