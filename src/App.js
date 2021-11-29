import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/Pages/About/AboutMe";
import ContactMe from "./Components/Pages/ContactMe/ContactMe";
import Footer from "./Components/Pages/Footer/Footer";
import Home from "./Components/Pages/Home/Home/Home";
import MyProjects from "./Components/Pages/MyProjects/MyProjects";
import Navbar from "./Components/Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<AboutMe></AboutMe>}></Route>
          <Route path="/contact" element={<ContactMe></ContactMe>}></Route>
          <Route path="/projects" element={<MyProjects></MyProjects>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
