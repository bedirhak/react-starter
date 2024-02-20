import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import Homepage from "./views/Homepage";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);