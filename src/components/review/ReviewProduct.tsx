import ReviewPrice from "./ReviewPrice";
import ReviewQuantitySelector from "./ReviewQuantitySelector";

interface ReviewProductProps {
  image: string;
  title: string;

  quantity: number;

  price: number | string;
  compareAtPrice?: number | string;

  onIncrease: () => void;
  onDecrease: () => void;
}

export default function ReviewProduct({
  image,
  title,
  quantity,
  price,
  compareAtPrice,
  onIncrease,
  onDecrease,
}: ReviewProductProps) {
  return (
    <div className="flex items-center gap-3">
      {/* Image */}
      <div className="flex h-[44px] w-[44px] items-center justify-center rounded-[6px] bg-white">
        <img
          src={image}
          alt={title}
          className="h-[36px] w-[36px] object-contain"
        />
      </div>

      {/* Title */}
      <div className="flex-1">
        <p className="text-[15px] font-medium leading-[120%] text-[#1F1F1F]">
          {title}
        </p>
      </div>

      {/* Quantity */}
      <ReviewQuantitySelector
        quantity={quantity}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />

      {/* Price */}
      <ReviewPrice
        price={price}
        compareAtPrice={compareAtPrice}
      />
    </div>
  );
}