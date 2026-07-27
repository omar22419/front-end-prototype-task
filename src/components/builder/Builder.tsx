import AccordionStep from "./AccordionStep";
import { useBundleStore } from "../../store/bundleStore";

export default function Builder() {
  const steps = useBundleStore((state) => state.steps);

  return (
    <section>
      {steps.map((step) => (
        <AccordionStep
          key={step.id}
          step={step}
        />
      ))}
    </section>
  );
}