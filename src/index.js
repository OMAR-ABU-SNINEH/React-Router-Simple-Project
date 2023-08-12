import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import Home from "./pages/Home";
import Html from "./pages/Html";
import JavaScript from "./pages/JavaScript";
import Css from "./pages/Css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/javascript",
    element: <JavaScript />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
