import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div id="about" className="bg-about pt-5 position-relative">
      <div data-aos="fade-up" data-aos-duration="1000">
        <p className="fs-5 text-white pt-5 font-cursive">A - L I T T L E</p>
        <span className="fs-1 border-2 gradient-text  border-top rounded">
          About Me
        </span>
      </div>
      <div className="container py-5">
        <div className="row g-0">
          <div className="col-sm-12 col-lg-6 px-3 pt-2" data-aos="fade-right">
            <div className="mx-3">
              <img
                src="https://itechzo.com/wp-content/uploads/2020/04/Difference-Between-Mobile-Website-and-Responsive-Website.jpg"
                alt="devices"
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 pt-2" data-aos="fade-left">
            <div className="mx-3 text-start text-white">
              <h4 className="border-bottom border-2">Me, Myselt & I</h4>
              <p className="text-justify">
                I, Abdullah Al Mamun, is a 21 years old Cox's Bazar based
                website developer. I used to wonder how these amazing websites
                built. Later I learned javascript for web design and
                development. I found myself a lover of development. After a year
                of practice and hardwork I now confidentially call myself a web
                developer. although my study has never been on my side.
                Currently I study Economics in Cox's Bazar Government College. I
                am very passionate about my work and looking forward to make
                more webs.
              </p>
              <Link to="/about">
                <button className="btn btn-outline-light">Learn More</button>
              </Link>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6 mt-5" data-aos="fade-right">
            <div className="mx-3 mt-5 pt-5 text-start text-white">
              <h4 className="border-bottom border-2">Education</h4>
              <div className="timeline">
                <div className="timeline-box">
                  <div className="timeline-dot-1"></div>
                  <div className="timeline-innerbox">
                    <p data-aos="fade-up">2021-present</p>
                    <div className="timeline-item" data-aos="fade-up">
                      <h5>BSS - Economics</h5>
                      <p>Cox's Bazar Government College.</p>
                      <p>Cox's Bazar, Bangladesh.</p>
                    </div>{" "}
                    <div className="timeline-dot-2"></div>
                    <p data-aos="fade-up">2018-2020</p>
                    <div className="timeline-item" data-aos="fade-up">
                      <h5>HSC - Science</h5>
                      <p>Baitush Sharaf Ideal Kamil Madrasha.</p>
                      <p>Chattagram, Bangladesh.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 pt-5 col-lg-6 mt-5 p-5">
            <div data-aos="fade-left">
              <img
                src="https://creativebonito.com/wp-content/uploads/2019/07/learning-education-illustration-concept-templates-cover.png"
                alt="education"
                className="img-fluid rounded mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
