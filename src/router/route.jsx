import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import React from "react";
import Loginpages from "../pages/Loginpages";
import Todolist from "../pages/todolist";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  { path: "/", element: <Loginpages /> },
  { path: "/todolist", element: <Todolist /> },
  { path: "*", element: <NotFound /> },
]);
export default function Route() {
  return <RouterProvider router={router} />;
}
