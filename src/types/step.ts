export type StepIcon = "camera" | "shield" | "sensor" | "lock";

export interface IStep {
  id: number;
  title: string;
  icon: StepIcon;
  isOpen: boolean;
  // selectedCount: number;
}