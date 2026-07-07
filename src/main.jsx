import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/CheckoutPage.css";
import "./Styles/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
