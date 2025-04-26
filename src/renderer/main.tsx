import App from "@/renderer/App";
import AboutPage from "@/renderer/pages/About";
import "@/renderer/styles/global.css";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

const root = createRoot(document.body);

root.render(<RouterProvider router={router} />);
