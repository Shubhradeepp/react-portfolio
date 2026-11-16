import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Typewriter-style monospace stands in for Unicode "Mathematical Monospace Bold".
// Real font files keep the text selectable, searchable and readable by screen readers.
import "@fontsource/courier-prime/400.css";
import "@fontsource/courier-prime/700.css";
import "@fontsource/space-mono/700.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
