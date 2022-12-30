import Head from 'next/head';
import { useRouter } from 'next/router';

import { siteMeta } from '@/lib/constants';

const { siteTitle, siteDesc, siteUrl } = siteMeta;

interface props {
  pageTitle: string;
  pageDesc: string;
}
export default function Meta({ pageTitle, pageDesc }: props) {
  const title = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle;
  const desc = pageDesc ?? siteDesc;
  const router = useRouter();
  const url = `${siteUrl}${router.asPath}`;
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="description" content={desc} />
      <meta property="og:description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </Head>
  );
}
