import React from "react";
import { Link } from "react-router-dom";
import profile from "../../../img/profile.png";

const AboutMe = () => {
  return (
    <div className="bg-about py-5">
      <div className="container pt-5">
        <div className="row g-0">
          <div className="col-sm-12 col-lg-6">
            <div>
              <img
                src={profile}
                alt="devices"
                className="img-fluid bg-skin rounded-circle"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="mx-3 text-start text-white">
              <h4 className="border-bottom border-2 mt-5 pt-5">About Me</h4>
              <p className="text-justify">
                I am a 21 years old Cox's Bazar based website developer. I
                learned javascript for web design and development. I found
                myself a lover of development. Then I went for MERN Stack
                development. After a year of practice and hardwork I now
                confidentially call myself a web developer. I am very passionate
                about my work and looking forward to make more webs.
              </p>
              <Link to="/contact">
                <button className="btn btn-outline-light">Contact Me</button>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 pt-5">
            <div className="mx-3 text-start text-white">
              <h4 className="border-bottom border-2">Education</h4>
              <div className="timeline">
                <div className="timeline-box">
                  <div className="timeline-dot-1"></div>
                  <div className="timeline-innerbox">
                    <p>2021-present</p>
                    <div className="timeline-item">
                      <h5>BSS - Economics</h5>
                      <p>Cox's Bazar Government College.</p>
                      <p>Cox's Bazar, Bangladesh.</p>
                    </div>{" "}
                    <div className="timeline-dot-2"></div>
                    <p>2018-2020</p>
                    <div className="timeline-item">
                      <h5>HSC - Science</h5>
                      <p>Baitush Sharaf Ideal Kamil Madrasha.</p>
                      <p>Chattagram, Bangladesh.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 mt-5">
            <div>
              <img
                src="https://i.pinimg.com/736x/9a/04/59/9a0459b17161ffbef3c406c56cbbc24f.jpg"
                alt="education"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
