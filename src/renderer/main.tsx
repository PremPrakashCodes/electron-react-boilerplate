import App from "@/renderer/App";
import AboutPage from "@/renderer/pages/About";
import "@/renderer/styles/global.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

const root = createRoot(document.body);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  </BrowserRouter>
);
