import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Crew from "./components/crew";
import Destination from "./components/destination";
import Home from "./components/home";
import Technology from "./components/technology";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
