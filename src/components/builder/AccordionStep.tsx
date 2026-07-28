import StepHeader from "./StepHeader";
import ProductGrid from "./ProductGrid";
import PlanGrid from "../plan/PlanGrid";
import NextButton from "../ui/NextButton";

import type { IStep } from "../../types/step";
import { useBundleStore } from "../../store/bundleStore";

interface AccordionStepProps {
  step: IStep;
}

export default function AccordionStep({ step }: AccordionStepProps) {
  const nextStep = useBundleStore((state) => state.nextStep);
  const openStep = useBundleStore((state) => state.openStep);

  const steps = useBundleStore((state) => state.steps);

  const products = useBundleStore((state) => state.products);
  const sensors = useBundleStore((state) => state.sensors);
  const accessories = useBundleStore((state) => state.accessories);
  const plans = useBundleStore((state) => state.plans);

  let currentProducts = products;

  let category: "products" | "sensors" | "accessories" = "products";

  if (step.id === 3) {
    currentProducts = sensors;
    category = "sensors";
  }

  if (step.id === 4) {
    currentProducts = accessories;
    category = "accessories";
  }

  const selectedCount = currentProducts.filter((product) =>
    product.variants?.some((variant) => variant.quantity > 0),
  ).length;

  const canGoNext =
    step.id === 2 ? plans.some((plan) => plan.isSelected) : selectedCount > 0;

  const next = steps.find((item) => item.id === step.id + 1);

  return (
    <section
      className={`rounded-[10px] transition-all duration-200  ${
        step.isOpen ? "bg-[#EDF4FF]" : "bg-white"
      }`}
    >
      <div>
        <span className="px-3 text-[11px] font-semibold uppercase tracking-[2px] text-[#7B8394]">
          STEP {step.id} OF {steps.length}
        </span>

        <div className="mt-1 border-b border-[#D7DFEA]" />
      </div>

      <div onClick={() => openStep(step.id)} className="cursor-pointer">
        <StepHeader
          title={step.title}
          icon={step.icon}
          isOpen={step.isOpen}
          selectedCount={step.id === 2 ? 1 : selectedCount}
        />
      </div>

      {step.isOpen && (
        <div className="px-[15px] pb-[15px]">
          {step.id === 2 ? (
            <PlanGrid />
          ) : (
            <ProductGrid products={currentProducts} category={category} />
          )}

          {next && (
            <div className="mt-6 flex justify-center">
              <NextButton
                nextTitle={next.title}
                disabled={!canGoNext}
                onClick={() => {
                  if (!canGoNext) return;
                  nextStep(step.id);
                }}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
