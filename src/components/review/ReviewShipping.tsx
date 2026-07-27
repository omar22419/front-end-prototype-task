import ReviewPrice from "./ReviewPrice";
import shippingIcon  from '../../assets/Free Shipping icon.svg'


export default function ReviewShipping() {
  return (
    <div className="mt-5 flex items-center justify-between ">
      <div className="flex items-center gap-4">
        <img
          src={shippingIcon}
          alt="Fast Shipping"
          className="h-[52px] w-[52px] object-contain"
        />

        <span className="text-[18px] font-medium text-[#1F1F1F]">
          Fast Shipping
        </span>
      </div>

      <ReviewPrice price="FREE" compareAtPrice="$5.99" />
    </div>
  );
}
