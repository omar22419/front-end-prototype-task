import type { IStep } from "../types/step";

export const stepData: IStep[] = [
  {
    id: 1,
    title: "Choose your cameras",
    icon: "camera",
    isOpen: true,
  },
  {
    id: 2,
    title: "Choose your plan",
    icon: "shield",
    isOpen: false,
  },
  {
    id: 3,
    title: "Choose your sensors",
    icon: "sensor",
    isOpen: false,
  },
  {
    id: 4,
    title: "Add extra protection",
    icon: "lock",
    isOpen: false,
  },
];