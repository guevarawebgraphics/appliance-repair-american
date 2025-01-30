import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((registration) => {
        console.log("✅ Service Worker registered:", registration);
      })
      .catch((registrationError) => {
        console.log("❌ Service Worker registration failed:", registrationError);
      });
  });
}
