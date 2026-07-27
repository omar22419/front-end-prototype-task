interface ReviewTotalProps {
  total: number;
  originalTotal: number;
}

export default function ReviewTotal({
  total,
  originalTotal,
}: ReviewTotalProps) {
  return (
    <div className="mt-6 flex items-end justify-end gap-3">
      <span className="text-[18px] text-[#757575] line-through">
        ${originalTotal.toFixed(2)}
      </span>

      <span className="text-[42px] font-semibold leading-none text-[#4E2FD2]">
        ${total.toFixed(2)}
      </span>
    </div>
  );
}