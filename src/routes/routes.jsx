import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Alert from "../pages/Alert.jsx";
import Overview from "../pages/Overview.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Settings from "../pages/Settings.jsx";
import DragableDashboard from "../pages/DragableDashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // { path: "/", element: <Dashboard /> },
      { path: "/", element: <DragableDashboard /> },
      { path: "/alert", element: <Alert /> },
      { path: "/overview", element: <Overview /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
]);

export default router;

