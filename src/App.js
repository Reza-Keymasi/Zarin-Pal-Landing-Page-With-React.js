import React from 'react';

import { Routes, Route } from "react-router-dom"


// Components
import Landing from "./components/landingPage/Landing.jsx";

import {Support, Footer, StartBox, Navbar } from "./components/landingPage/Index"

// Products
import PaymentGateway from "./components/products/PaymentGateway.jsx";
import ZarinLink from "./components/products/ZarinLink.jsx";
import ZarinPlus from "./components/products/ZarinPlus.jsx";
import ZarinCard from './components/products/ZarinCard.jsx';


const App = () => {
  return (
    <div> 
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/payment-gateway" element={<PaymentGateway />} />
        <Route path="/zarinlink" element={<ZarinLink />} />
        <Route path="/zarinplus" element={<ZarinPlus />} />
        <Route path="/zarincard" element={<ZarinCard />} />
      </Routes>

      <StartBox />

      <Support />

      <Footer />
    </div>
  );
};

export default App;
