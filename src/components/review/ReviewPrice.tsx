interface ReviewPriceProps {
  price: number | string;
  compareAtPrice?: number | string;
}

export default function ReviewPrice({
  price,
  compareAtPrice,
}: ReviewPriceProps) {
  return (
    <div className="flex flex-col items-end leading-none">
      {compareAtPrice && (
        <span className="text-[18px] font-normal text-[#7B8794] line-through">
          {typeof compareAtPrice === "number"
            ? `$${compareAtPrice}`
            : compareAtPrice}
        </span>
      )}

      <span className="mt-[4px] text-[17px] font-semibold text-[#4E2FD2]">
        {typeof price === "number" ? `$${price}` : price}
      </span>
    </div>
  );
}