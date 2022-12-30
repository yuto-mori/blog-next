interface props {
  text: string;
}

export function Text({ text }: props) {
  return <p>{text}</p>;
}
