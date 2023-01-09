import Link from 'next/link';

import { Img } from '@/components/atoms/Img/Img';
import styles from '@/components/organisms/Card/Card.module.scss';

type props = {
  publishDate: string;
  title: string;
  slug: string;
  hero: hero;
  tags: tag[];
};

type hero = {
  url: string;
  width: number;
  height: number;
};

type tag = {
  name: string;
  slug: string;
};

export function Card(item: props) {
  const date = new Date(item.publishDate);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const getHeroUrl = (url: string) => {
    const [extension] = url.split('.').reverse();
    return {
      url: url.replace(`.${extension}`, ''),
      extension: extension,
    };
  };
  return (
    <article className={`${styles.card}`}>
      <h2 className={`${styles.heading} md:mgt-16 mgt-16`}>
        <Link href={`/article/${item.slug}`}>{item.title}</Link>
      </h2>
      <div className={styles.thum}>
        <Link href={`/article/${item.slug}`}>
          <Img
            src={getHeroUrl(item.hero.url).url}
            extension={getHeroUrl(item.hero.url).extension}
            alt={''}
            width={{ pc: item.hero.width }}
            height={{ pc: item.hero.height }}
            loading={'lazy'}
          />
        </Link>
      </div>
      <div className={`${styles.foot} md:mgt-16 mgt-16 d-grid is-free-col-2`}>
        <dl className={`${styles.tag}`}>
          <dt>タグ：</dt>
          <dd>
            <Link href={`/article/tag/${item.tags[0].slug}`}>
              {item.tags[0].name}
            </Link>
          </dd>
        </dl>
        <p className={`${styles.date}`}>
          <time
            dateTime={`${year}-${month}-${day}`}
          >{`${year}年${month}月${day}`}</time>
        </p>
      </div>
    </article>
  );
}
