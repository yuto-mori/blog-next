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
        <div className="width-page margin-lr-auto">
          <div className="l-content md:pdt-48 pdt-32 md:width-736 md:margin-lr-0">
            <PageHead />
          </div>
          <SideBySide addClasses={['md:mgt-64', 'mgt-40']}>
            <div>
              <div className="l-content">{children}</div>
            </div>
            <div>
              <p>
                ああああああああああああああああああああああああああああああああああああああああああああああああ
              </p>
            </div>
          </SideBySide>
        </div>
      </div>
    </main>
  );
}
