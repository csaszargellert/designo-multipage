import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyles from "./styles/global";
import ErrorPage from "./pages/Error.jsx";
import About from "./pages/About.jsx";
import Locations from "./pages/Locations.jsx";
import Contact from "./pages/Contact.jsx";
import Design from "./pages/Design.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/locations",
        element: <Locations />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/design/:designId",
        element: <Design />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Fragment>
      <GlobalStyles />
      <RouterProvider router={router} />
    </React.Fragment>
  </React.StrictMode>
);
