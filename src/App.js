import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Router/Navbar";
import Home from "./Components/Router/Pages/Home";
import Categories from "./Components/Router/Pages/Categories";







function App() {
  let component
  switch (window.location.pathname) {
     case '/':
      component = <App/>
      break
    case '/home':
      component = <Home />
      break
    case '/categories' :
      component = <Categories />
      break
  }
  return (
    <div>
      <Navbar />
      {component}
    </div>
    
  );
}


export default App;