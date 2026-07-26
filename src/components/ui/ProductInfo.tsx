interface ProductInfoProps {
  title: string;
  description: string;
  learnMore?: string;
}

export default function ProductInfo({
  title,
  description,
  learnMore,
}: ProductInfoProps) {
  return (
    <div className="flex flex-col max-w-[205px]">
      <h3 className="text-[16px] font-semibold leading-none tracking-[0.6px] text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-[10px] text-[12px] font-normal leading-[130%] tracking-[0.6px] text-[#575757]">
        {description}{" "}
        {learnMore && (
          <a
            href={learnMore}
            className="inline text-[12px] font-normal leading-[130%] tracking-[0.6px] text-[#2D45FF] underline"
          >
            Learn More
          </a>
        )}
      </p>
    </div>
  );
}