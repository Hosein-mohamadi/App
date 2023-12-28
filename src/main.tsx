import "material-icons/iconfont/material-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appRouter } from "./data/routes.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main
      data-theme="light"
      className="mx-auto w-full overflow-auto min-h-screen"
    >
      <RouterProvider router={appRouter} />
      <ToastContainer />
    </main>
  </React.StrictMode>
);
