import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import ProductsPage from "./pages/ProductsPage";
import DealershipPage from "./pages/DealershipPage";
import Contact from "./pages/Contact";
import HydraulicDifferential from "./pages/HydraulicDifferential";
import FrontFork from "./pages/FrontFork";
import ElectricRickshaw from "./pages/ElectricRickshaw";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/dealership" element={<DealershipPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/hydraulic-differential" element={<HydraulicDifferential />} />
        <Route path="/front-fork" element={<FrontFork />} />
        <Route path="/electric-rickshaw" element={<ElectricRickshaw />} />
      </Routes>
      <FloatingButtons />
      <Footer />
    </BrowserRouter>
  );
}

export default App;