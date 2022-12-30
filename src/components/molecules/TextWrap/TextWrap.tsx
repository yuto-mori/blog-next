import { Text } from '@/components/atoms/Text/Text';

interface props {
  textArray: string[];
}
export function TextWrap({ textArray }: props) {
  return (
    <div className="m-text-wrap">
      {textArray.map((text, i) => {
        return <Text text={text} key={i} />;
      })}
    </div>
  );
}
