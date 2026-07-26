interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage({
  src,
  alt,
}: ProductImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-[90px] w-[90px] mt-3 object-contain"
    />
  );
}