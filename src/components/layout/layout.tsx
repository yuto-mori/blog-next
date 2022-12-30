import { ReactNode } from 'react';

import Footer from '@/components/organisms/footer';
import Header from '@/components/organisms/header';
import PageHead from '@/components/organisms/PageHead/PageHead';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <PageHead />
      <main>{children}</main>
      <Footer />
    </>
  );
}
