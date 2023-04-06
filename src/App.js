import React from "react";
import AppHeader from "./Components/Styling/Bootstrap/header";
import AppHero from "./Components/Styling/Bootstrap/hero";
import Isi from "./Components/Styling/Bootstrap/Isi";




function App() {
  return (
    <div className="App">
      <header id="header">
        <AppHeader />
      </header>
      <AppHero />
      <Isi />
    </div>
  )
}

export default App; 