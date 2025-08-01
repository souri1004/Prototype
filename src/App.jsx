import './App.css';
import React from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
