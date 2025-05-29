import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.tsx";
import { ModalProvider } from "./useContext/ModalContext";   

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>          
        <App />
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
