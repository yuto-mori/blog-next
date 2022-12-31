import { ReactNode } from 'react';

import { PageHead } from '@/components/organisms/PageHead/PageHead';

interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <main>
        <div className="l-wrap md:pdt-48 pdt-32">
          <div className="l-container">
            <PageHead />
          </div>
        </div>
        {children}
      </main>
    </>
  );
}
