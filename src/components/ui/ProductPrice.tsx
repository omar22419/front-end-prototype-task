interface ProductPriceProps {
  price: number;
  compareAtPrice?: number;
}

export default function ProductPrice({
  price,
  compareAtPrice,
}: ProductPriceProps) {
  return (
    <div className="flex min-w-[90px] flex-col items-end justify-end">
      {compareAtPrice && (
        <span className="text-[16px] text-[#D8392B] line-through">
          ${compareAtPrice.toFixed(2)}
        </span>
      )}

      <span className="text-[16px] text-[#575757]">
        ${price.toFixed(2)}
      </span>
    </div>
  );
}