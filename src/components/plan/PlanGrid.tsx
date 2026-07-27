import { useBundleStore } from "../../store/bundleStore";
import PlanCard from "./PlanCard";

export default function PlanGrid() {
  const plans = useBundleStore((state) => state.plans);

  const selectPlan = useBundleStore(
    (state) => state.selectPlan
  );

  return (
    <div className="space-y-4">
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          onSelect={() => selectPlan(plan.id)}
        />
      ))}
    </div>
  );
}