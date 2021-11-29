import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-dark text-white">
      <div className="d-flex pt-3 justify-content-end">
        <Link to="/home">
          <p className="btn btn-secondary bg-skin mx-2">Home</p>
        </Link>
        <Link to="/about">
          <p className="btn btn-secondary bg-skin mx-2">About Me</p>
        </Link>
        <Link to="/contact">
          <p className="btn btn-secondary bg-skin mx-2 me-3">Contact Me</p>
        </Link>
        <Link to="/projects">
          <p className="btn btn-secondary bg-skin mx-2 me-3">My projects</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
