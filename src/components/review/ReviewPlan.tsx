import ReviewPrice from "./ReviewPrice";

interface ReviewPlanProps {
  icon: string;

  title: string;
  highlight: string;

  monthlyPrice: number;
  compareAtPrice: number;
}

export default function ReviewPlan({
  icon,
  title,
  highlight,
  monthlyPrice,
  compareAtPrice,
}: ReviewPlanProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <img
          src={icon}
          alt={title}
          className="h-[24px] w-[24px] object-contain"
        />

        <h4 className="text-[15px] font-semibold tracking-[0.2px]">
          <span className="text-[#1F1F1F]">{title} </span>

          <span className="text-[#4E2FD2]">{highlight}</span>
        </h4>
      </div>

      <ReviewPrice
        price={`$${monthlyPrice.toFixed(2)}/mo`}
        compareAtPrice={`$${compareAtPrice.toFixed(2)}/mo`}
      />
    </div>
  );
}
