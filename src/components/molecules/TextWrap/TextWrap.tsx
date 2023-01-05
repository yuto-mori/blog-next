import { Text } from '@/components/atoms/Text/Text';
import { useAddClass } from '@/hooks/useAddClass';

type props = {
  addClasses?: string[];
  textArray: string[];
};
export function TextWrap({ textArray, addClasses }: props) {
  const { addClass } = useAddClass();
  return (
    <div className={`m-text-wrap ${addClasses ? addClass(addClasses) : ''}`}>
      {textArray.map((text, i) => {
        return <Text text={text} key={i} />;
      })}
    </div>
  );
}
