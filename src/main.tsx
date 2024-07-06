import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { PropertiesProvider } from "./context/propertiesContext/PropertiesContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PropertiesProvider>
      <App />
    </PropertiesProvider>
  </React.StrictMode>
);
