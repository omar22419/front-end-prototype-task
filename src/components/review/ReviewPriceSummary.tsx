interface ReviewPriceSummaryProps {
  total: number;
  originalTotal: number;
}

export default function ReviewPriceSummary({
  total,
  originalTotal,
}: ReviewPriceSummaryProps) {
  return (
    <div className="mt-6 flex items-end justify-between">
      {/* Left */}
      <div>
        <img
          src="https://res.cloudinary.com/duexs5wps/image/upload/v1785118541/991e1497c0a1c9e070778c8eb0abab6e98ddb05a_ja8mzz.png"
          alt="Protection Badge"
          className="h-[105px] w-[105px] object-contain"
        />{" "}
      </div>

      {/* Right */}
      <div className="flex flex-col items-end">
        <div className="rounded-[6px] bg-[#4E2FD2] px-3 py-[4px]">
          <span className="text-[12px] font-medium text-white">
            as low as $19.19/mo
          </span>
        </div>

        <div className="mt-2 flex items-end gap-2">
          <span className="text-[24px]  font-semibold text-[#707A8A] line-through">
            ${originalTotal.toFixed(2)}
          </span>

          <span className="text-[27px] font-bold leading-normal text-[#4E2FD2]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}
