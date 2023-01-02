import React from "react";
import { createRoot } from "react-dom/client";
import "./sass/styles.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Customers from "./views/Customer/Customers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/",
    children: [
      {
        path: "/customer",
        element: <Customers />,
      },
    ],
  },
]);

const container = document.getElementById("root");

const root = createRoot(container!);

root.render(
  <React.StrictMode>
		<RouterProvider router={router} />
  </React.StrictMode>
);
