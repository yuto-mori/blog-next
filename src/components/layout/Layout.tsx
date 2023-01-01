import { ReactNode } from 'react';

import { SideBySide } from '@/components/layout/SideBySide';
import { PageHead } from '@/components/organisms/PageHead/PageHead';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <main className="main">
      <div className="l-page-pddding-lr">
        <SideBySide addClasses={['md:pdt-48', 'pdt-32']}>
          <div className="l-content">
            <PageHead />
          </div>
          <div className="l-content">{children}</div>
        </SideBySide>
      </div>
    </main>
  );
}
