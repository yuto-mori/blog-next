import Link from 'next/link';

import { Img } from '@/components/atoms/Img/Img';
import styles from '@/components/organisms/Card/Card.module.scss';

type props = {
  title: string;
  url: string;
  hero: hero;
};

type hero = {
  url: string;
  width: number;
  height: number;
};

export function Card(item: props) {
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
        <Link href="">{item.title}</Link>
      </h2>
      <div className={styles.thum}>
        <Link href="">
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
            <Link href="">ブラックミラー</Link>
          </dd>
        </dl>
        <p className={`${styles.date}`}>
          <time dateTime="">2020年5月16日</time>
        </p>
      </div>
    </article>
  );
}
