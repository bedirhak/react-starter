import * as React from "react";
import * as ReactDOM from "react-dom/client";

import Homepage from "./views/Homepage";
import About from "./views/Homepage";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/normalization.css';
import Header from './components/Header';
import Footer from './components/Footer';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <Homepage />,
  },
  {
    path: "/anasayfa",
    element: <Homepage />,
  },
  {
    path: "/hakkımızda",
    element: <About />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);