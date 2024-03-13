import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./views/Homepage";
import About from "./views/Homepage"; // Assuming this is intended to be a different component
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/normalization.css';
import Header from './components/Header';
import Footer from './components/Footer';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Homepage />} /> 
        <Route path="/anasayfa" element={<Homepage />} />
        <Route path="/hakkımızda" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
