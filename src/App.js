import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutMe from "./Components/Pages/About/AboutMe";
import Blogs from "./Components/Pages/Blogs/Blogs";
import ContactMe from "./Components/Pages/ContactMe/ContactMe";
import Footer from "./Components/Pages/Footer/Footer";
import Home from "./Components/Pages/Home/Home/Home";
import MyProjects from "./Components/Pages/MyProjects/MyProjects";
import ProjectDetails from "./Components/Pages/MyProjects/ProjectDetails";
import Navbar from "./Components/Pages/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route
            path="/project/:id"
            element={<ProjectDetails></ProjectDetails>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
