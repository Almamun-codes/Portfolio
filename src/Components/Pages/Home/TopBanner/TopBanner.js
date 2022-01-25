import React from "react";
import profile from "../../../../img/profile.png";
import resume from "../../../../img/Abdullah-al-mamun-resume.pdf";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";

const TopBanner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="">
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            // background: {
            //   color: {
            //     value: "#0d47a1",
            //   },
            // },
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: false,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="bg-black text-start text-skin pt-5">
        <div className="row g-0 position-relative pt-5">
          <div className="col-lg-6 col-sm-12 animate__animated animate__fadeInLeft">
            <div className="d-flex justify-content-center">
              <div className="w-75 ps-3 pt-5 mt-5">
                <h1 className="top-heading gradient-text">Hi there!</h1>
                <h3 className="top-heading gradient-text">
                  I'm <span className="">Abdullah Al Mamun</span>
                </h3>
                <h4 className=" gradient-text">
                  A Cox's Bazar based MERN stack developer.
                </h4>
                <div className="mt-3">
                  <Link to="/contact">
                    <button className="btn btn-sm btn-secondary text-light btn-outline-dark me-3">
                      Hire Me
                    </button>
                  </Link>
                  <a href={resume} download="Abdullah's-resume">
                    <button className="btn btn-sm  btn-secondary btn-outline-dark text-light">
                      Get Resume
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 animate__animated animate__slideInUp">
            <div className="d-flex justify-content-center">
              <div className="w-75">
                <img src={profile} alt="profile" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
