import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Home from "./components/home/Home";
import Footer from "./components/Navbar/Footer/footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Conatct/Contact";

import About from "./components/About/About";
import { Routes, Route } from "react-router-dom";
import Alpie from "./components/PIE/Allpie";
function App() {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div>
          <Sidebar Route path="/Allpie" element={<Alpie />} />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />n
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Form />} />
            <Route path="/Allpie" element={<Alpie />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
