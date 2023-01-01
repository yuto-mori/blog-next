import { ReactNode } from 'react';

import styles from '@/components/layout/Layout.module.scss';

type Props = {
  addClasses?: string[];
  children: ReactNode;
};

export function SideBySide({ addClasses, children }: Props) {
  return (
    <div
      className={`${styles.layout} ${
        addClasses
          ? new Intl.ListFormat('en', {
              style: 'narrow',
              type: 'unit',
            }).format([...addClasses])
          : ''
      }`}
    >
      {children}
    </div>
  );
}
