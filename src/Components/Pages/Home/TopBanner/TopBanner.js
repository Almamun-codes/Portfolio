import React from "react";
import profile from "../../../../img/profile.png";
import resume from "../../../../img/Abdullah-al-mamun-resume.pdf";
import { Link } from "react-router-dom";

const TopBanner = () => {
  return (
    <div>
      <div className="bg-dark text-start text-skin">
        <div className="row g-0">
          <div className="col-lg-6 col-sm-12 ">
            <div className="d-flex justify-content-center">
              <div className="w-75 ps-3 pt-5 mt-5">
                <h1 className="top-heading">Hi there!</h1>
                <h3 className="top-heading">I'm Abdullah Al Mamun</h3>
                <h4>A Cox's Bazar based MERN stack developer.</h4>
                <div className="mt-3">
                  <Link to="/contact">
                    <button className="btn btn-sm btn-secondary me-3 bg-skin">
                      Hire Me
                    </button>
                  </Link>
                  <a href={resume} download="Abdullah's-resume">
                    <button className="btn btn-sm btn-secondary bg-skin">
                      Get Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <img src={profile} alt="profile" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="bg-top"></div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
