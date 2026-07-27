import { create } from "zustand";

import { cameraProducts } from "../data/product";
import { plans } from "../data/plans";
import { stepData } from "../data/steps";
import type { IStep } from "../types/step";
import { sensorProducts } from "../data/sensors";
import { accessoryProducts } from "../data/accessories";

type ProductCategory = "products" | "sensors" | "accessories";

interface BundleStore {
  products: typeof cameraProducts;

  sensors: typeof sensorProducts;

  accessories: typeof accessoryProducts;

  steps: IStep[];

  plans: typeof plans;

  openStep: (stepId: number) => void;
  nextStep: (currentStepId: number) => void;

  selectPlan: (planId: string) => void;

  selectVariant: (
    category: ProductCategory,
    productId: string,
    variantId: string,
  ) => void;

  increaseQuantity: (
    category: ProductCategory,
    productId: string,
    variantId: string,
  ) => void;

  decreaseQuantity: (
    category: ProductCategory,
    productId: string,
    variantId: string,
  ) => void;
}

function updateCategoryProducts(
  products: typeof cameraProducts,
  productId: string,
  variantId: string,
  action: "increase" | "decrease"
) {
  return products.map((product) => {
    if (product.id !== productId) return product;

    const variants =
      product.variants?.map((variant) => {
        if (variant.id !== variantId) return variant;

        return {
          ...variant,
          quantity:
            action === "increase"
              ? variant.quantity + 1
              : Math.max(0, variant.quantity - 1),
        };
      }) ?? [];

    return {
      ...product,
      variants,
      isSelected: variants.some((v) => v.quantity > 0),
    };
  });
}



export const useBundleStore = create<BundleStore>((set) => ({
  products: cameraProducts,

  sensors: sensorProducts,

  accessories: accessoryProducts,

  steps: stepData,

  plans,

  openStep: (stepId) =>
    set((state) => {
      const clickedStep = state.steps.find((step) => step.id === stepId);

      const shouldOpen = !clickedStep?.isOpen;

      return {
        steps: state.steps.map((step) => ({
          ...step,
          isOpen: step.id === stepId ? shouldOpen : false,
        })),
      };
    }),

  nextStep: (currentStepId) =>
    set((state) => {
      const nextExists = state.steps.some(
        (step) => step.id === currentStepId + 1,
      );

      if (!nextExists) return state;

      return {
        steps: state.steps.map((step) => ({
          ...step,
          isOpen: step.id === currentStepId + 1,
        })),
      };
    }),

  // --------------------
  // Plan Actions
  // --------------------
  selectPlan: (planId) =>
    set((state) => ({
      plans: state.plans.map((plan) => ({
        ...plan,
        isSelected: plan.id === planId,
      })),
    })),

  // --------------------
  // Product Actions
  // --------------------
selectVariant: (category, productId, variantId) =>
  set((state) => ({
    [category]: state[category].map((product) =>
      product.id === productId
        ? {
            ...product,
            selectedVariantId: variantId,
          }
        : product
    ),
  })),

increaseQuantity: (category, productId, variantId) =>
  set((state) => ({
    [category]: updateCategoryProducts(
      state[category],
      productId,
      variantId,
      "increase"
    ),
  })),

decreaseQuantity: (category, productId, variantId) =>
  set((state) => ({
    [category]: updateCategoryProducts(
      state[category],
      productId,
      variantId,
      "decrease"
    ),
  })),
}));
