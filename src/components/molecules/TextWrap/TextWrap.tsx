import { Text } from '@/components/atoms/Text/Text';

type props = {
  addClasses?: string[];
  textArray: string[];
};
export function TextWrap({ textArray, addClasses }: props) {
  return (
    <div
      className={`m-text-wrap ${
        addClasses
          ? new Intl.ListFormat('en', {
              style: 'narrow',
              type: 'unit',
            }).format([...addClasses])
          : ''
      }`}
    >
      {textArray.map((text, i) => {
        return <Text text={text} key={i} />;
      })}
    </div>
  );
}
