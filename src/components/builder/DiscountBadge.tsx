interface DiscountBadgeProps {
  text: string;
}

export default function DiscountBadge({ text }: DiscountBadgeProps) {
  return (
    <span
      className="rounded-full bg-[#4E2FD2] px-2 py-1 text-[11px] font-medium text-white"
    >
      {text}
    </span>
  );
}
