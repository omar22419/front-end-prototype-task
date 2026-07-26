import StepHeader from "./StepHeader";
import ProductGrid from "./ProductGrid";
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

  const next = steps.find((item) => item.id === step.id + 1);

  return (
    <section
      className={`rounded-[10px]  transition-all duration-200 ${
        step.isOpen ? "bg-[#EDF4FF]" : "bg-white"
      }`}
    >
      <div onClick={() => openStep(step.id)} className="cursor-pointer">
        <StepHeader
          step={step.id}
          totalSteps={steps.length}
          title={step.title}
          icon={step.icon}
          isOpen={step.isOpen}
        />
      </div>

      {step.isOpen && (
        <div className="p-[15px]">
          <ProductGrid />

          {next && (
            <div className="mt-6 flex justify-center">
              <NextButton
                nextTitle={next.title}
                onClick={() => nextStep(step.id)}
              />
            </div>
          )}
        </div>
      )}
    </section>
  );
}
