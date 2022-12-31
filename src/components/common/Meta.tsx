import Head from 'next/head';
import { useRouter } from 'next/router';

import { siteMeta } from '@/lib/constants';

const { siteTitle, siteDesc, siteUrl } = siteMeta;

type props = {
  pageTitle: string;
  pageDesc: string;
};
export function Meta({ pageTitle, pageDesc }: props) {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;
  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <title>{title}</title>
      <link rel="canonical" href={url} />
    </Head>
  );
}
