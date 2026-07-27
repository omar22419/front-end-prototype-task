import {
  Camera,
  ChevronDown,
  ChevronUp,
  Lock,
  Radio,
  Shield,
} from "lucide-react";

interface IStepHeaderProps {
  title: string;
  icon: "camera" | "shield" | "sensor" | "lock";
  isOpen: boolean;
  selectedCount: number;
}

const stepIcons = {
  camera: Camera,
  shield: Shield,
  sensor: Radio,
  lock: Lock,
};

export default function StepHeader({
  title,
  icon,
  isOpen,
  selectedCount,
}: IStepHeaderProps) {
  const Icon = stepIcons[icon];

  return (
    <div
      className={`flex items-center justify-between px-[15px] py-[12px] ${isOpen ? "" : "border-b border-[#C9D4E5]"}`}
    >
      <div className="flex items-center gap-3">
        <Icon size={22} strokeWidth={1.75} className="text-[#4B5563]" />

        <h3 className="text-[18px] font-semibold text-[#1F1F1F]">{title}</h3>
      </div>

      <div className="flex items-center gap-2">
        {isOpen ? (
          <span className="text-[14px] font-medium text-[#4E2FD2]">
            {selectedCount} selected
          </span>
        ) : (
          ""
        )}

        {isOpen ? (
          <ChevronUp size={18} className="text-[#4E2FD2]" />
        ) : (
          <ChevronDown size={18} className="text-[#4E2FD2]" />
        )}
      </div>
    </div>
  );
}
