import ProductCard from "../ui/ProductCard";

import type { Product } from "../../types/product";

import { useBundleStore } from "../../store/bundleStore";

interface ProductGridProps {
  products: Product[];
  category: "products" | "sensors" | "accessories";
}

export default function ProductGrid({
  products,
  category,
}: ProductGridProps) {
  const increaseQuantity = useBundleStore((state) => state.increaseQuantity);

  const decreaseQuantity = useBundleStore((state) => state.decreaseQuantity);

  const selectVariant = useBundleStore((state) => state.selectVariant);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-3 lg:grid-cols-2 lg:gap-4">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={
            index === products.length - 1
              ? "lg:col-span-2 lg:flex lg:justify-center"
              : ""
          }
        >
          <ProductCard
            product={product}
            onIncrease={(variantId) =>
              increaseQuantity(category, product.id, variantId)
            }
            onDecrease={(variantId) =>
              decreaseQuantity(category, product.id, variantId)
            }
            onSelectVariant={(variantId) =>
              selectVariant(category, product.id, variantId)
            }
          />
        </div>
      ))}
    </div>
  );
}