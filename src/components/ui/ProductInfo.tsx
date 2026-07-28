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
    <div className="flex flex-col">
      <h3 className="lg:text-[16px] md:text-[11px] font-semibold leading-none tracking-[0.6px] text-[#1F1F1F]">
        {title}
      </h3>

      <p className="mt-[10px] md:mt-2 lg:text-[12px] md:text-[9px] font-normal leading-[130%] tracking-[0.6px] text-[#575757]">
        {description}{" "}
        {learnMore && (
          <a
            href={learnMore}
            className="inline lg:text-[12px] md:text-[9px] font-normal leading-[130%] tracking-[0.6px] text-[#2D45FF] underline"
          >
            Learn More
          </a>
        )}
      </p>
    </div>
  );
}