import { Head, Html, Main, NextScript } from 'next/document';

import { siteMeta } from '@/lib/constants';

const { siteLang } = siteMeta;

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head />
      <body className="page-blog">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
