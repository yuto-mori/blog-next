type props = {
  src: string;
  alt: string;
  extension: string;
  width: width;
  height: height;
  loading?: 'lazy' | 'eager';
};

type width = {
  pc?: number;
  sp?: number;
};

type height = {
  pc?: number;
  sp?: number;
};

export function Img({ src, alt, extension, width, height, loading }: props) {
  return (
    <picture>
      <source
        srcSet={`${src}.webp`}
        type={`image/webp`}
        width={width.pc}
        height={height.pc}
      />
      <img
        src={`${src}.${extension}`}
        alt={alt}
        width={width.pc}
        height={height.pc}
        loading={loading}
      />
    </picture>
  );
}
