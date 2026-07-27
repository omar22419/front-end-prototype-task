interface CheckoutButtonProps {
  onClick?: () => void;
}

export default function CheckoutButton({
  onClick,
}: CheckoutButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-1 h-[60px] w-full rounded-[8px] bg-[#4E2FD2] text-[20px] font-semibold text-white transition-colors duration-200 hover:bg-[#4428BE]"
    >
      Checkout
    </button>
  );
}