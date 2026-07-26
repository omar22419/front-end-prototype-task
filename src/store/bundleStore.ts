import { create } from "zustand";
import { cameraProducts } from "../data/product";
import { stepData } from "../data/steps";
import type { IStep } from "../types/step";

interface BundleStore {
  products: typeof cameraProducts;
  steps: IStep[];

  openStep: (stepId: number) => void;
  nextStep: (currentStepId: number) => void;

  selectVariant: (productId: string, variantId: string) => void;
  increaseQuantity: (productId: string, variantId: string) => void;
  decreaseQuantity: (productId: string, variantId: string) => void;
}

export const useBundleStore = create<BundleStore>((set) => ({
  products: cameraProducts,
  steps: stepData,
  selectVariant: (productId, variantId) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? {
              ...product,
              selectedVariantId: variantId,
            }
          : product
      ),
    })),

  increaseQuantity: (productId, variantId) =>
    set((state) => ({
      products: state.products.map((product) => {
        if (product.id !== productId) return product;

        return {
          ...product,
          isSelected: true,
          variants:
            product.variants?.map((variant) =>
              variant.id === variantId
                ? {
                    ...variant,
                    quantity: variant.quantity + 1,
                  }
                : variant
            ) ?? [],
        };
      }),
    })),

  decreaseQuantity: (productId, variantId) =>
  set((state) => ({
    products: state.products.map((product) => {
      if (product.id !== productId) return product;

      const variants =
        product.variants?.map((variant) =>
          variant.id === variantId
            ? {
                ...variant,
                quantity: Math.max(0, variant.quantity - 1),
              }
            : variant
        ) ?? [];

      const isSelected = variants.some((v) => v.quantity > 0);

      return {
        ...product,
        variants,
        isSelected,
      };
    }),
  })),

openStep: (stepId) =>
  set((state) => {
    const clickedStep = state.steps.find(
      (step) => step.id === stepId
    );

    const shouldOpen = !clickedStep?.isOpen;

    return {
      steps: state.steps.map((step) => ({
        ...step,
        isOpen: step.id === stepId ? shouldOpen : false,
      })),
    };
  }),

nextStep: (currentStepId) =>
  set((state) => ({
    steps: state.steps.map((step) => ({
      ...step,
      isOpen: step.id === currentStepId + 1,
    })),
  })),
}));