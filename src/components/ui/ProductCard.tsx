import type { Product } from "../../types/product";
import { cn } from "../../lib/utils";

import DiscountBadge from "../builder/DiscountBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import VariantSelector from "./VariantSelector";
import QuantitySelector from "./QuantitySelector";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  product: Product;

  onIncrease: (variantId: string) => void;
  onDecrease: (variantId: string) => void;
  onSelectVariant: (variantId: string) => void;
}

export default function ProductCard({
  product,
  onIncrease,
  onDecrease,
  onSelectVariant,
}: ProductCardProps) {
  const selectedVariantId = product.selectedVariantId;

  const selectedVariant = product.variants?.find(
    (variant) => variant.id === selectedVariantId,
  );

  const quantity = selectedVariant?.quantity ?? 0;
  return (
    <article
      className={cn(
        "w-full rounded-[10px] bg-white transition-all p-[10px] lg:max-w-[400px] lg:h-[180px] lg:p-[11px]",
        product.isSelected
          ? "border-2 border-[#4E2FD2B2]"
          : "border border-[#E7E7E7]",
      )}
    >
      <div className="flex gap-2 md:flex-col lg:flex-row">
        <div className="w-[120px]">
          {product.badge && <DiscountBadge text={product.badge} />}
          <ProductImage src={product.image} alt={product.title} />
        </div>

        <div className="flex h-full flex-col gap-[19px] md:gap-3">
          <ProductInfo
            title={product.title}
            description={product.description}
            learnMore={product.learnMore}
          />

          {product.variants && (
            <VariantSelector
              variants={product.variants}
              selectedVariantId={selectedVariantId}
              onSelectVariant={onSelectVariant}
            />
          )}
          <div className="mt-auto flex items-end justify-between gap-2">
            <QuantitySelector
              quantity={quantity}
              onIncrease={() => onIncrease(selectedVariantId)}
              onDecrease={() => onDecrease(selectedVariantId)}
            />

            <ProductPrice
              price={product.price}
              compareAtPrice={product.compareAtPrice}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
