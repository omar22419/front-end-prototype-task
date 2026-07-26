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
    <div className="mt-4 flex items-center gap-3">
      <button
        onClick={onDecrease}
        disabled={quantity === 0}
        className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F1F3F6] text-[#6B7280] disabled:opacity-40"
      >
    <Minus size={18} strokeWidth={2.5} />
      </button>

      <span className="min-w-[20px] text-center text-[18px] font-medium text-[#0B0D10]">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="flex h-7 w-7 items-center justify-center rounded-md bg-[#F1F3F6] text-[#6B7280]"
      >
        <Plus size={18} />
      </button>
    </div>
  );
}