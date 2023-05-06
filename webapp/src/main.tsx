import React from "react";
import { createRoot } from "react-dom/client";
import "./sass/styles.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customers from "./views/Customer/Customers";
import translations from "./translations/I18n";
import Dashboard from "./views/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
    ],
  },
]);

const container = document.getElementById("root");

const root = createRoot(container!);

translations.configure("en-US");

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
