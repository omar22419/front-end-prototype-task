interface ReviewSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ReviewSection({
  title,
  children,
}: ReviewSectionProps) {
  return (
    <section className=" mt-2">
      <h3 className="mb-2 text-[12px] uppercase tracking-[0.6px] text-[#A5A5A5]">
        {title}
      </h3>

      <div className="space-y-3">
        {children}
      </div>

      <div className="mt-2 border-b border-[#D9D9D9]" />
    </section>
  );
}