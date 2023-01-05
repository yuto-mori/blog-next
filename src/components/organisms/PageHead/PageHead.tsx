import { PageHeading } from '@/components/atoms/PageHeading/PageHeading';
import { TextWrap } from '@/components/molecules/TextWrap/TextWrap';

export function PageHead() {
  return (
    <div className="head">
      <PageHeading heading="アイディアをひらめいた" />
      <TextWrap
        addClasses={['md:mgt-24', 'mgt-24']}
        textArray={[
          '「アイディアをひらめいた!」と叫ぶために、映画の感想を通して物語作りに役立つことを書いてます！　マンガ・小説などの作成の参考にしてください！　webのことも書くかも……。',
        ]}
      />
    </div>
  );
}
