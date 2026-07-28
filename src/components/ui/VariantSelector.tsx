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
    <div
      className="
        mt-3
        flex
        gap-2

        md:mt-2
        md:gap-[2px]

        lg:mt-3
        lg:gap-2
      "
    >
      {variants.map((variant) => (
        <button
          key={variant.id}
          type="button"
          onClick={() => onSelectVariant(variant.id)}
          className={cn(
            `
            flex items-center justify-center gap-2
            rounded-[4px]
            border-[0.5px]
            px-2 py-1
            transition-all duration-200

            md:h-[26px]
            md:px-[2px]
            md:gap-1

            lg:px-2
            lg:gap-2
            `,
            selectedVariantId === variant.id
              ? "border-[#0AA288] bg-[#1DF0BB0A]"
              : "border-[#D9D9D9] bg-white",
          )}
        >
          <img
            src={variant.image}
            alt={variant.name}
            className="
              h-4 w-4 object-contain

              md:h-[9px]
              md:w-[9px]

              lg:h-4
              lg:w-4
            "
          />

          <span
            className="
              text-[12px] text-[#0B0D10]

              md:text-[9px]

              lg:text-[12px]
            "
          >
            {variant.name}
          </span>
        </button>
      ))}
    </div>
  );
}
