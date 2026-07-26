import ProductCard from "../ui/ProductCard";
import { useBundleStore } from "../../store/bundleStore";

export default function ProductGrid() {
  const products = useBundleStore((state) => state.products);

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={
            index === products.length - 1
              ? "col-span-2 flex justify-center"
              : ""
          }
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}