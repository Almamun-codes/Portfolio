import React from "react";

const Navbar = () => {
  return (
    <div className="bg-dark text-white">
      <div className="d-flex pt-3 justify-content-end">
        <p className="btn btn-secondary mx-2">Home</p>
        <p className="btn btn-secondary mx-2">About Me</p>
        <p className="btn btn-secondary mx-2 me-3">Contact Me</p>
        <p className="btn btn-secondary mx-2 me-3">My projects</p>
      </div>
    </div>
  );
};

export default Navbar;
