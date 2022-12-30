interface props {
  text: string;
}

export default function Text({ text }: props) {
  return <p>{text}</p>;
}
