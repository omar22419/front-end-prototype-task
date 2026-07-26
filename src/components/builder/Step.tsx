import type { IStep } from "../../types/step";
import StepHeader from "./StepHeader";

type StepProps = {
  step: IStep;
};

export default function Step({ step }: StepProps) {
  return (
    <section className="rounded-lg">
      <StepHeader
        step={step.id}
        totalSteps={4}
        title={step.title}
        icon={step.icon}
        isOpen={step.id === 1}
      />
    </section>
  );
}



