interface ReviewSavingProps {
  amount: number;
}

export default function ReviewSaving({
  amount,
}: ReviewSavingProps) {
  return (
    <p className="mt-5 text-center text-[12px] font-medium text-[#00A884]">
      Congrats! You're saving ${amount.toFixed(2)} on your security bundle!
    </p>
  );
}