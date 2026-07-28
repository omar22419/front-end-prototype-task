# Bundle Builder

A responsive multi-step Bundle Builder built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Zustand**.

The application allows users to build a complete security bundle by selecting cameras, a subscription plan, sensors, and accessories while receiving a live summary of their selections.

---

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- Lucide React

---

## Features

### Multi-Step Bundle Builder

- 4-step accordion workflow
- Camera selection
- Plan selection
- Sensor selection
- Accessory selection
- Only one step can be opened at a time
- Next button validation before moving to the next step

---

### Product Selection

- Multiple product categories
- Variant selection
- Quantity controls
- Dynamic selected state
- Automatic border highlight
- Discount badge support

---

### Live Review Panel

The review panel updates instantly while building the bundle.

Includes:

- Selected Cameras
- Selected Sensors
- Selected Accessories
- Selected Plan
- Live Quantity Updates
- Price Breakdown
- Savings Calculation
- Checkout Button
- Save System Link
- Fast Shipping Section

---

### State Management

Managed using **Zustand**.

Store handles:

- Products
- Sensors
- Accessories
- Plans
- Step Navigation
- Variant Selection
- Quantity Updates
- Bundle Summary

---

## Responsive Design

Optimized for:

- Mobile
- Tablet
- Desktop

Responsive layouts include:

- Flexible Product Grid
- Adaptive Review Panel
- Mobile-first Accordion Layout
- Tablet Layout Improvements
- Desktop Two-Column Layout

---

## Folder Structure

```
src/
│
├── components/
│   ├── builder/
│   ├── review/
│   ├── plan/
│   └── ui/
│
├── store/
│
├── data/
│
├── types/
│
├── lib/
│
└── App.tsx
```

---

## State Flow

```
Builder
      │
      ▼
AccordionStep
      │
      ▼
ProductGrid
      │
      ▼
ProductCard
      │
      ▼
Zustand Store
      │
      ▼
Review Panel
```

---

## Project Highlights

- Clean reusable component architecture
- Type-safe implementation
- Centralized global state
- Responsive UI
- Reusable UI components
- Modular folder structure
- Live synchronized review panel
- Dynamic pricing calculations

---

## Installation

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Future Improvements

- Unit Tests
- E2E Testing
- Accessibility Improvements
- Animation Enhancements
- API Integration
- Backend Persistence
- Bundle Serialization
- Performance Optimization

---

## Author

Omar Khaled

Frontend Developer