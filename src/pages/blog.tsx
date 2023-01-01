import { Meta } from '@/components/common/Meta';
import { List } from '@/components/layout/List';
import { Card } from '@/components/organisms/Card/Card';

export default function BlogTop() {
  return (
    <>
      <div>
        <Meta pageTitle="ブログ" pageDesc="ブログ記事一覧" />
        <List>
          <Card />
        </List>
      </div>
    </>
  );
}
