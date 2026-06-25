import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<div className="loader">JRK Electrician</div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
);
