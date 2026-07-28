interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
}

export default function ProductPrice({
  price,
  compareAtPrice,
}: ProductPriceProps) {
  return (
    <div className="flex flex-col items-end md:flex-row">
      {compareAtPrice && (
        <span
          className="
            text-[12px]
            text-[#D8392B]
            line-through

            md:text-[10px]

            lg:text-[12px]
          "
        >
          ${compareAtPrice.toFixed(2)}
        </span>
      )}

      <span
        className="
          text-[16px]
          font-semibold
          text-[#575757]

          md:text-[14px]

          lg:text-[16px]
        "
      >
        ${price.toFixed(2)}
      </span>
    </div>
  );
}