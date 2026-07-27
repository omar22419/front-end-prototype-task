import { Check } from "lucide-react";
import { cn } from "../../lib/utils";
import type { Plan } from "../../data/plans";

interface PlanCardProps {
  plan: Plan;
  onSelect: () => void;
}

export default function PlanCard({
  plan,
  onSelect,
}: PlanCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "w-full rounded-[10px] border p-5 text-left transition-all",
        plan.isSelected
          ? "border-[#4E2FD2] bg-[#F8F6FF]"
          : "border-[#D9D9D9] bg-white"
      )}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[22px] font-semibold text-[#1F1F1F]">
            {plan.title}
          </h3>

         
        </div>

        {plan.isSelected && (
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4E2FD2]">
            <Check
              size={16}
              color="white"
              strokeWidth={3}
            />
          </div>
        )}
      </div>

      <div className="mt-6">
        <span className="text-[34px] font-semibold text-[#4E2FD2]">
          ${plan.monthlyPrice}
        </span>

        <span className="ml-1 text-[18px] text-[#575757]">
          /mo
        </span>
      </div>
    </button>
  );
}