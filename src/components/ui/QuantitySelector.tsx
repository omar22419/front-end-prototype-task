import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function QuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center gap-2 md:gap-[6px] lg:gap-2">
      <button
        onClick={onDecrease}
        disabled={quantity === 0}
        className="
          flex items-center justify-center
          rounded-md
          bg-[#F1F3F6]
          text-[#6B7280]
          disabled:opacity-40 h-7 w-7 md:h-4 md:w-4
          lg:h-7 lg:w-7
        "
      >
        <Minus
          className="
            h-[18px] w-[18px]

            md:h-[6px] md:w-[6px]

            lg:h-[18px] lg:w-[18px]
          "
        />
      </button>

      <span
        className="
          min-w-[20px]
          text-center
          font-medium
          text-[#0B0D10]

          text-[18px]

          md:min-w-[8px]
          md:text-[14px]

          lg:text-[18px]
        "
      >
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="
          flex items-center justify-center
          rounded-md
          bg-[#F1F3F6]
          text-[#6B7280]

          h-7 w-7

          md:h-4 md:w-4

          lg:h-7 lg:w-7
        "
      >
        <Plus
          className="
            h-[18px] w-[18px]

            md:h-[6px] md:w-[6px]

            lg:h-[18px] lg:w-[18px]
          "
        />
      </button>
    </div>
  );
}
