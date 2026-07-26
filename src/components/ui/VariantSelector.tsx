import { cn } from "../../lib/utils";
import type { ProductVariant } from "../../types/product";

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId: string;
  onSelectVariant: (variantId: string) => void;
}

export default function VariantSelector({
  variants,
  selectedVariantId,
  onSelectVariant,
}: VariantSelectorProps) {
  return (
    <div className="mt-3 flex items-center gap-2 overflow-x-auto">
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          onClick={() => onSelectVariant(variant.id)}
          className={cn(
            "flex items-center gap-2 rounded-[4px] border-[0.5px] px-2 py-1 transition-all duration-200",
            selectedVariantId === variant.id
              ? "border-[#0AA288] bg-[#1DF0BB0A]"
              : "border-[#D9D9D9] bg-white"
          )}
        >
          <img
            src={variant.image}
            alt={variant.name}
            className="h-4 w-4 object-contain"
          />

          <span className="text-[12px] text-[#0B0D10]">
            {variant.name}
          </span>
        </button>
      ))}
    </div>
  );
}