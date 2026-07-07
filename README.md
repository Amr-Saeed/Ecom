# Wyze Security System Builder

A React-based two-column checkout experience for building a Wyze smart-home security system.

The application features a **4-step accordion builder** on the left and a **live order summary** on the right that updates instantly as users customize their security bundle.

> **Note:** This project is a frontend prototype. The **Checkout** button displays a confirmation alert and does not process real payments.

---

(in a nutshell to run the project you need npm run dev, node server.js)

## Features

- Multi-step accordion bundle builder
- Live order summary with automatic price calculation
- Data-driven UI using JSON
- Product variants (e.g. colors)
- Independent quantity tracking per variant
- Automatic localStorage persistence
- Responsive desktop and mobile layout
- Optional Express backend API
- Reusable React components

---

# Getting Started

## 1. Clone the repository

```bash
git clone <repo-url>
cd <project-folder>
```

---

## 2. Install dependencies

```bash
npm install
```

---

# Running the Project

## Option A — Static JSON (Recommended)

The application includes a local JSON file located at:

```
public/products.json
```

### Update the fetch URL

In `src/components/CheckoutPage.jsx`, change:

```js
fetch("http://localhost:3001/api/products");
```

to:

```js
fetch("/products.json");
```

Run the application:

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

No additional setup is required.

---

## Option B — Express Backend (Bonus)

An Express server is included that serves the same product data via an API.

### Start the backend

```bash
node server.js
```

Expected output:

```
API running at http://localhost:3001
```

---

The frontend automatically loads it using:

```js
fetch("http://localhost:3001/api/products");
```

---

### Start the frontend

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## Project Structure

```text
src/
│
├── components/
│   ├── CheckoutPage.jsx
│   ├── StepsContainer.jsx
│   ├── Step.jsx
│   ├── ProductCard.jsx
│   ├── OrderSummary.jsx
│   ├── SummaryItem.jsx
│   └── QuantityControl.jsx
│
├── Icons/
│   ├── CameraIcon.jsx
│   ├── PlanIcon.jsx
│   ├── SensorsIcon.jsx
│   ├── ProtectionIcon.jsx
│   └── WyzeCamIcon.jsx
│
├── styles/
│   ├── CheckoutPage.css
│   └── index.css
│
├── App.jsx
├── main.jsx
│
public/
│   ├── products.json
│   └── image assets
│
server.js
```

---

---

# Architecture

### State Management

All application state is managed inside `CheckoutPage.jsx` using React state and passed to child components through props. No external state management library is used.

---

### Data-Driven Rendering

Products, variants, pricing, and image paths are stored in `products.json`.

The UI is generated dynamically from this data rather than being hardcoded.

---

### Variant Quantities

Each product variant maintains its own quantity independently.

For example:

- Camera (White) → Quantity 2
- Camera (Black) → Quantity 1

These quantities remain separate throughout the builder and the order summary.

---

### Persistence

Configuration is automatically saved to `localStorage`.

The application restores the previous configuration when the page reloads.

---

### Images

- Product cards display the product's main image.
- The order summary uses `summaryImage` or `variantImage` depending on the selected variant.

---

### Quantity Controls

A reusable `QuantityControl` component is shared across the application.

Features:

- Increment/decrement buttons
- Minimum quantity enforcement
- Lucide React icons

---

### Responsive Layout

- Desktop: two-column layout
- Tablet/Mobile: stacked layout

---

### Optional Backend

An Express server (`server.js`) exposes:

```
GET /api/products
```

allowing the frontend to consume product data from a real API.

---

# Known Limitations

- Only **Step 1 (Cameras)** is fully implemented.
- Steps 2–4 currently contain placeholder headers and icons.
- The **Next** button advances between steps, but later steps do not contain interactive content.
- Plan and shipping prices are hardcoded inside `CheckoutPage.jsx`.
- Variant chips do not include an active visual state.

---

# Technologies Used

- React
- JavaScript (ES6+)
- CSS
- Express (optional backend)
- Lucide React
- localStorage

---

# Deliverables

### Source Code

```
src/components/
```

Includes:

- CheckoutPage
- StepsContainer
- Step
- ProductCard
- OrderSummary
- SummaryItem
- QuantityControl
- Custom icons

---

### Data

```
public/products.json
```

or

```
server.js
```

---

### Styling

```
index.css
CheckoutPage.css
```

---

# Demo

The Checkout button is implemented for demonstration purposes only and displays a confirmation alert after the bundle has been configured, and save later is working as predicted it saves to the local storage.

# Ecom
