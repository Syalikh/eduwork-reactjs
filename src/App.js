import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Navbar from './Components/Router/Navbar'
import Home from "./Components/Router/Pages/Home";
import About from "./Components/Router/Pages/About";
import Contact from "./Components/Router/Pages/Contact";

function App() {
return (
  
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
}

export default App;