import { PageHeading } from '@/components/atoms/PageHeading/PageHeading';
import { TextWrap } from '@/components/molecules/TextWrap/TextWrap';

export function PageHead() {
  return (
    <div className="page-head">
      <PageHeading heading="アイディアをひらめいた" />
      <TextWrap textArray={['aaa', 'bbb']} />
    </div>
  );
}
