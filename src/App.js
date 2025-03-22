import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WhyCarboncrunch from "./components/WhyCarboncrunch";
import GettingStarted from "./components/GettingStarted";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <Header />
      <HeroSection />
      <WhyCarboncrunch />
      <GettingStarted />
    </div>
  );
}

export default App;
