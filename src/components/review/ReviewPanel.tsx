import { useBundleStore } from "../../store/bundleStore";
import ReviewHeader from "./ReviewHeader";
import ReviewPlan from "./ReviewPlan";
import ReviewProduct from "./ReviewProduct";
import ReviewSaving from "./ReviewSaving";
import ReviewSection from "./ReviewSection";
import ReviewPriceSummary from "./ReviewPriceSummary";
import ReviewShipping from "./ReviewShipping";
import CheckoutButton from "./CheckoutButton";
import SaveSystemLink from "./SaveSystemLink";

export default function ReviewPanel() {
  const products = useBundleStore((state) => state.products);
  const sensors = useBundleStore((state) => state.sensors);
  const accessories = useBundleStore((state) => state.accessories);

  const selectedPlan = useBundleStore((state) =>
    state.plans.find((plan) => plan.isSelected),
  );

  const increaseQuantity = useBundleStore((state) => state.increaseQuantity);

  const decreaseQuantity = useBundleStore((state) => state.decreaseQuantity);

  const selectedProducts = products.filter((product) =>
    product.variants?.some((variant) => variant.quantity > 0),
  );

  const selectedSensors = sensors.filter((product) =>
    product.variants?.some((variant) => variant.quantity > 0),
  );

  const selectedAccessories = accessories.filter((product) =>
    product.variants?.some((variant) => variant.quantity > 0),
  );

  const allProducts = [
    ...selectedProducts,
    ...selectedSensors,
    ...selectedAccessories,
  ];

  const productsSubtotal = allProducts.reduce((total, product) => {
    const quantity =
      product.variants?.reduce((sum, variant) => sum + variant.quantity, 0) ??
      0;

    return total + product.price * quantity;
  }, 0);

  const originalProductsSubtotal = allProducts.reduce((total, product) => {
    const quantity =
      product.variants?.reduce((sum, variant) => sum + variant.quantity, 0) ??
      0;

    return total + (product.compareAtPrice ?? product.price) * quantity;
  }, 0);

  const planPrice = selectedPlan?.monthlyPrice ?? 0;

  const subtotal = productsSubtotal + planPrice;

  const originalSubtotal = originalProductsSubtotal + planPrice;

  const savings = originalSubtotal - subtotal;

  return (
    <aside className="w-full rounded-[10px] bg-[#EDF4FF] p-[15px]">
      <ReviewHeader />
      <div className="grid gap-4 gap-y-6 lg:gap-8 grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-1">
        <div className="space-y-4">
          <ReviewSection title="Cameras">
            {selectedProducts.map((product) => {
              const selectedVariant = product.variants?.find(
                (variant) => variant.quantity > 0,
              );

              if (!selectedVariant) return null;

              return (
                <ReviewProduct
                  key={product.id}
                  image={selectedVariant.image ?? product.image}
                  title={product.title}
                  quantity={selectedVariant.quantity}
                  price={product.price}
                  compareAtPrice={product.compareAtPrice}
                  onIncrease={() =>
                    increaseQuantity(
                      "products",
                      product.id,
                      product.selectedVariantId,
                    )
                  }
                  onDecrease={() =>
                    decreaseQuantity(
                      "products",
                      product.id,
                      product.selectedVariantId,
                    )
                  }
                />
              );
            })}
          </ReviewSection>

          <ReviewSection title="Sensors">
            {selectedSensors.map((product) => {
              const selectedVariant = product.variants?.find(
                (variant) => variant.quantity > 0,
              );

              if (!selectedVariant) return null;

              return (
                <ReviewProduct
                  key={product.id}
                  image={selectedVariant.image ?? product.image}
                  title={product.title}
                  quantity={selectedVariant.quantity}
                  price={product.price}
                  compareAtPrice={product.compareAtPrice}
                  onIncrease={() =>
                    increaseQuantity(
                      "sensors",
                      product.id,
                      product.selectedVariantId,
                    )
                  }
                  onDecrease={() =>
                    decreaseQuantity(
                      "sensors",
                      product.id,
                      product.selectedVariantId,
                    )
                  }
                />
              );
            })}
          </ReviewSection>

          <ReviewSection title="Accessories">
            {selectedAccessories.map((product) => {
              const selectedVariant = product.variants?.find(
                (variant) => variant.quantity > 0,
              );

              if (!selectedVariant) return null;

              return (
                <ReviewProduct
                  key={product.id}
                  image={selectedVariant.image ?? product.image}
                  title={product.title}
                  quantity={selectedVariant.quantity}
                  price={product.price}
                  compareAtPrice={product.compareAtPrice}
                  onIncrease={() =>
                    increaseQuantity(
                      "accessories",
                      product.id,
                      product.selectedVariantId,
                    )
                  }
                  onDecrease={() =>
                    decreaseQuantity(
                      "accessories",
                      product.id,
                      product.selectedVariantId,
                    )
                  }
                />
              );
            })}
          </ReviewSection>

          {selectedPlan && (
            <ReviewSection title="Plan">
              <ReviewPlan
                icon={selectedPlan.icon}
                title={selectedPlan.title}
                highlight={selectedPlan.highlight}
                monthlyPrice={selectedPlan.monthlyPrice}
                compareAtPrice={selectedPlan.compareAtPrice}
              />
            </ReviewSection>
          )}

          <ReviewShipping />
        </div>
        <div className="space-y-4">
          <ReviewPriceSummary total={subtotal} originalTotal={originalSubtotal} />
          <ReviewSaving amount={savings} />
          <CheckoutButton />
          <SaveSystemLink />
        </div>
      </div>
    </aside>
  );
}
