import PlanIcon from '../assets/Layer_1.svg'

export interface Plan {
  id: string;
  title: string;
  highlight: string;
  icon: string;
  monthlyPrice: number;
  compareAtPrice: number;
  isSelected: boolean;
}


export const plans: Plan[] = [
  {
    id: "cam-unlimited",

    title: "Cam",
    highlight: "Unlimited",

    icon: PlanIcon,

    monthlyPrice: 9.99,
    compareAtPrice: 12.99,

    isSelected: true,
  },
];