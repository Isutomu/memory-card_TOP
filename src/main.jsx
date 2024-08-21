import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "../styles/reset.css";
import "../styles/common.css";
import "../styles/header.css";
import "../styles/gameboard.css";
import "../styles/card.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
