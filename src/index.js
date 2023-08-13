import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "../node_modules/react-router-dom/dist/index";
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "../node_modules/react-router-dom/dist/index";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/html",
//     element: <Html />,
//   },
//   {
//     path: "/css",
//     element: <Css />,
//   },
//   {
//     path: "/javascript",
//     element: <JavaScript />,
//   },
// ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
