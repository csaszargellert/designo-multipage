import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/global";
import ErrorPage from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import LocationsPage from "./pages/LocationsPage.jsx";
import Contact from "./pages/Contact.jsx";
import DesignPage from "./pages/DesignPage.jsx";
import Home, { loader as HomeLoader } from "./pages/Home.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: HomeLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/locations",
        element: <LocationsPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/design/:designId",
        element: <DesignPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
