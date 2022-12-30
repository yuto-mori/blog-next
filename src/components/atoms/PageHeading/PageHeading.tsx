interface props {
  heading: string;
}
export default function PageHeading({ heading }: props) {
  return <h1>{heading}</h1>;
}
