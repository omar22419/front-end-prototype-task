interface NextButtonProps {
  nextTitle: string;
  onClick: () => void;
  disabled?: boolean;
}

export default function NextButton({
  nextTitle,
  onClick,
  disabled = false,
}: NextButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex h-[39px] w-fit min-w-[242px] items-center justify-center rounded-[7px] border px-6 transition-all duration-200 ${
        disabled
          ? "cursor-not-allowed border-[#CFCFCF] bg-[#F8F8F8]"
          : "cursor-pointer border-[#4E2FD2] hover:bg-[#4E2FD2]/5"
      }`}
    >
      <span
        className={`whitespace-nowrap text-[18px] font-semibold tracking-[0.6px] ${
          disabled ? "text-[#B8B8B8]" : "text-[#4E2FD2]"
        }`}
      >
        Next: {nextTitle}
      </span>
    </button>
  );
}