import type { Product } from "../types/product";

export const sensorProducts: Product[] = [
  {
    id: "motion-sensor",
    title: "Wyze Sense Motion Sensor",
    description: "Detects motion and sends alerts instantly.",
    image: "https://res.cloudinary.com/duexs5wps/image/upload/v1785095432/c5d210d5bb593396f4f1f51b5f3538c79613ef44_kv74om.png",
    price: 23.98,
    compareAtPrice: 29.98,
    badge: "20% OFF",
    learnMore: "#",
    selectedVariantId: "default",
    isSelected: false,
    variants: [
      {
        id: "default",
        name: "Default",
        color: "",
        image: "https://res.cloudinary.com/duexs5wps/image/upload/v1785095432/c5d210d5bb593396f4f1f51b5f3538c79613ef44_kv74om.png",
        quantity: 0,
      },
    ],
  },

  {
    id: "entry-sensor",
    title: "Wyze Sense Entry Sensor",
    description: "Know whenever a door or window opens.",
    image: "https://res.cloudinary.com/duexs5wps/image/upload/v1785095434/822f111b8d7505688a09b4d01cc536f6f009a8cd_tt9tew.png",
    price: 19.99,
    selectedVariantId: "default",
    isSelected: false,
    variants: [
      {
        id: "default",
        name: "Default",
        color: "",
        image: "https://res.cloudinary.com/duexs5wps/image/upload/v1785095434/822f111b8d7505688a09b4d01cc536f6f009a8cd_tt9tew.png",
        quantity: 0,
      },
    ],
  },
];
