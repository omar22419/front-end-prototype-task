import {
  Camera,
  ChevronDown,
  ChevronUp,
  Lock,
  Radio,
  Shield,
} from "lucide-react";
import { useBundleStore } from "../../store/bundleStore";
interface IStepHeaderProps {
  step: number;
  totalSteps: number;
  title: string;
  icon: "camera" | "shield" | "sensor" | "lock";
  isOpen: boolean;
}

const stepIcons = {
  camera: Camera,
  shield: Shield,
  sensor: Radio,
  lock: Lock,
};

export default function StepHeader({
  step,
  totalSteps,
  title,
  icon,
  isOpen,
}: IStepHeaderProps) {
  const Icon = stepIcons[icon];

  const products = useBundleStore((state) => state.products);

  const selectedCount = products.filter((product) =>
    product.variants?.some((variant) => variant.quantity > 0),
  ).length;

  return (
    <header>
      <div>
        <p className="text-[12px] uppercase tracking-[1.6px] text-[#484848]">
          Step {step} of {totalSteps}
        </p>
        <hr />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 mt-2">
          <Icon size={22} />
          <h2 className='className="text-[22px] text-[#0B0D10]"'>{title}</h2>
          <div></div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6A5AE0]">
            {selectedCount} selected
          </span>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>
    </header>
  );
}
