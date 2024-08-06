import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import "./index.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
// import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";


export const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
