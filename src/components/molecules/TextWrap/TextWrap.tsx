import { Text } from '@/components/atoms/Text/Text';

interface props {
  addClasses?: string[];
  textArray: string[];
}
export function TextWrap({ textArray, addClasses }: props) {
  return (
    <div
      className={`m-text-wrap ${addClasses ? [...addClasses].join(' ') : ''}`}
    >
      {textArray.map((text, i) => {
        return <Text text={text} key={i} />;
      })}
    </div>
  );
}
