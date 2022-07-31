import React from 'react';

import { Routes, Route } from "react-router-dom"


// Components
import Landing from "./components/landingPage/Landing.jsx";

// Products
import PaymentGateway from "./components/products/PaymentGateway.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/payment-gateway" element={<PaymentGateway />} />
    </Routes>
  );
};

export default App;
