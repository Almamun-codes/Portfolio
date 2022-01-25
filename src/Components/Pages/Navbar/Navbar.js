import React, { useState } from "react";
import { a } from "react-router-dom";
import "animate.css";

const Navbar = () => {
  const [className, setClassName] = useState("");

  const [toggler, setToggler] = useState(false);

  const handleToggler = () => {
    setToggler(!toggler);
    if (toggler === true) {
      setClassName("collapsed");
    } else {
      setClassName("activated");
    }
  };
  return (
    <div>
      <div className="w-100 nav-bar position-fixed bg-black">
        <div className="nav-bar">
          <div className="d-flex pt-3 justify-content-center ">
            <a href="#">
              <p className="btn btn-sm btn-secondary btn-outline-dark text-light mx-2 animate__animated animate__bounceInLeft">
                Home
              </p>
            </a>
            <a href="#skills">
              <p className="btn btn-sm btn-secondary btn-outline-dark text-light mx-2 animate__animated animate__bounceInLeft">
                skills
              </p>
            </a>
            <a href="#projects">
              <p className="btn btn-sm btn-secondary btn-outline-dark text-light mx-2 animate__animated animate__bounceInRight">
                projects
              </p>
            </a>
            <a href="#about">
              <p className="btn btn-sm btn-secondary btn-outline-dark text-light mx-2 animate__animated animate__bounceInLeft">
                About
              </p>
            </a>
            <a href="#blogs">
              <p className="btn btn-sm btn-secondary btn-outline-dark text-light mx-2 animate__animated animate__bounceInRight">
                Blogs
              </p>
            </a>
            <a href="#contact">
              <p className="btn btn-sm btn-secondary btn-outline-dark text-light mx-2 animate__animated animate__bounceInRight">
                Contact
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-100 nav-sm position-fixed bg-dark">
        <div className="d-flex pt-3 justify-content-between">
          <h1 className="text-skin ms-2 pt-2">Abdullah Al Mamun</h1>
          <button
            onClick={handleToggler}
            className="btn btn-secondary bg-skin m-2"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <div className="position-fixed">
          <div className={`bg-secondary sidebar ${className}`}>
            <a href="#home" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Home</p>
            </a>
            <a href="#about" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">about</p>
            </a>
            <a href="#Projects" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Projects</p>
            </a>
            <a href="#contact" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Contact</p>
            </a>
            <a href="#blogs" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Blogs</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
