import React from 'react';

import { Routes, Route } from "react-router-dom"


// Components
import Landing from "./components/landingPage/Landing.jsx";

import { Support, Footer, StartBox } from "./components/landingPage/Index"

// Products
import PaymentGateway from "./components/products/PaymentGateway.jsx";


const App = () => {
  return (
    <div>  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
      </Routes>

      <StartBox />

      <Support />

      <Footer />
    </div>
  );
};

export default App;
