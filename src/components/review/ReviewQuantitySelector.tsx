import { Minus, Plus } from "lucide-react";

interface ReviewQuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function ReviewQuantitySelector({
  quantity,
  onIncrease,
  onDecrease,
}: ReviewQuantitySelectorProps) {
  return (
    <div className="flex items-center gap-[10px]">
      <button
        onClick={onDecrease}
        disabled={quantity === 0}
        className="flex h-6 w-6 items-center justify-center rounded-[4px] border border-[#D9D9D9] bg-white disabled:opacity-40"
      >
        <Minus size={12} strokeWidth={2.5} color="#757575" />
      </button>

      <span className="min-w-[12px] text-center text-[16px] font-medium text-[#1F1F1F]">
        {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="flex h-6 w-6 items-center justify-center rounded-[4px] border border-[#D9D9D9] bg-white"
      >
        <Plus size={12} strokeWidth={2.5} color="#757575" />
      </button>
    </div>
  );
}