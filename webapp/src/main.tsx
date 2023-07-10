import React from "react";
import { createRoot } from "react-dom/client";
import "./sass/styles.scss";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import translations from "./translations/I18n";
import { routes } from './routes';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map(({path, Element}) => ({path, element: <Element />}))     
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
