interface NextButtonProps {
  nextTitle: string;
  onClick: () => void;
}

export default function NextButton({
  nextTitle,
  onClick,
}: NextButtonProps) {
  return (
   <button
  onClick={onClick}
  className="flex h-[39px] w-fit min-w-[242px] items-center justify-center rounded-[7px] border border-[#4E2FD2] bg-white px-6"
>
  <span className="whitespace-nowrap text-[18px] font-semibold tracking-[0.6px] text-[#4E2FD2]">
    Next: {nextTitle}
  </span>
</button>
  );
}