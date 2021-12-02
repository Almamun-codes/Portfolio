import React, { useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="w-100 nav-bar position-fixed bg-dark">
        <div className="nav-bar">
          <div className="d-flex pt-3 justify-content-center ">
            <Link to="/home">
              <p className="btn btn-sm btn-secondary bg-skin mx-2">Home</p>
            </Link>
            <Link to="/about">
              <p className="btn btn-sm btn-secondary bg-skin mx-2">About</p>
            </Link>
            <Link to="/contact">
              <p className="btn btn-sm btn-secondary bg-skin mx-2">Contact</p>
            </Link>
            <Link to="/blogs">
              <p className="btn btn-sm btn-secondary bg-skin mx-2">Blogs</p>
            </Link>
            <Link to="/projects">
              <p className="btn btn-sm btn-secondary bg-skin mx-2">projects</p>
            </Link>
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
            <Link to="/home" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Home</p>
            </Link>
            <Link to="/about" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">about</p>
            </Link>
            <Link to="/Projects" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Projects</p>
            </Link>
            <Link to="/contact" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Contact</p>
            </Link>
            <Link to="/blogs" className=" text-decoration-none text-white">
              <p className="px-4 side-item py-2">Blogs</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
