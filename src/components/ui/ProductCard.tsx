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
        "rounded-[10px] bg-white p-[11px] transition-all",
        product.isSelected
          ? "border-2 border-[#4E2FD2B2]"
          : "border border-[#E7E7E7]",
      )}
    >
      <div className=" flex gap-4">
        <div>
          {product.badge && <DiscountBadge text={product.badge} />}
          <ProductImage src={product.image} alt={product.title} />
        </div>

        <div className="flex flex-1 flex-col">
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
          <div className="mt-auto flex items-end justify-between">
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
