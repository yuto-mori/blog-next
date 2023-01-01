import Link from 'next/link';

import { Img } from '@/components/atoms/Img/Img';
import styles from '@/components/organisms/Card/Card.module.scss';

export function Card() {
  return (
    <div className={`${styles.card}`}>
      <h2 className={`${styles.heading} md:mgt-16 mgt-16`}>
        <Link href="">
          【感想】海外ドラマ『ブラック・ミラー シーズン3-1「
          ランク社会」』他者の評価によっては、生きることすら困難になる世界で生きるということ
        </Link>
      </h2>
      <div className={styles.thum}>
        <Link href="">
          <Img
            src={
              'https://images.microcms-assets.io/assets/c24b191df6f04ce0ba60304361200e21/c6cdc8c38cb14b93a4df704a337d220d/eldenring0'
            }
            extension={'webp'}
            alt={''}
            width={{ pc: 640 }}
            height={{ pc: 360 }}
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
    </div>
  );
}
