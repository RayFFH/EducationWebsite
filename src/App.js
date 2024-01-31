import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom";
import Home from "./components/routes/Home";
import About from "./components/routes/About";
import Contact from "./components/routes/Contact";
import Service from "./components/routes/Service";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element ={<Home/>}/>
        <Route path ="/about" element ={<About/>}/>
        <Route path ="/service" element ={<Service/>}/>
        <Route path ="/contact" element = {<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
