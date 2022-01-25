import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="bg-skills">
      <div className="p-5">
        <div data-aos="fade-down" data-aos-duration="1000">
          <p className="fs-4 text-white pt-5 font-cursive">I'm Good At These</p>
          <span className="fs-1 border-2 gradient-text  border-top rounded">
            Skills
          </span>
        </div>
        <div className="py-4 d-flex justify-content-center">
          <div className="d-flex">
            <div className="outer-box-1">
              <div
                className="maincontainer"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="thecard">
                  <div className="thefront">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
                      alt="mongodb"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="theback">
                    <p className="mt-4 fs-2">HTML</p>
                  </div>
                </div>
              </div>
              <div
                className="maincontainer"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="thecard">
                  <div className="thefront">
                    <img
                      src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                      alt="mongodb"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="theback">
                    <p className="mt-4 fs-2">CSS</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-box-2">
              <div
                className="maincontainer"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div className="thecard">
                  <div className="thefront">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
                      alt="mongodb"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="theback">
                    <p className="mt-4 pt-2 fs-5">JavaScript</p>
                  </div>
                </div>
              </div>
              <div
                className="maincontainer"
                data-aos="fade-in"
                data-aos-duration="1000"
              >
                <div className="thecard">
                  <div className="thefront">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&usqp=CAU"
                      alt="mongodb"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="theback">
                    <p className="mt-4 pt-2 fs-5">Mondodb</p>
                  </div>
                </div>
              </div>
              <div
                className="maincontainer"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="thecard">
                  <div className="thefront">
                    <img
                      src="https://www.clipartmax.com/png/middle/89-894960_js-discord-bot-logo-node-js-and-react-js.png"
                      alt="mongodb"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="theback">
                    <p className="mt-4 fs-2">Node</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="outer-box-3">
              <div
                className="maincontainer"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="thecard">
                  <div className="thefront">
                    <img
                      src="https://www.pngitem.com/pimgs/m/157-1575410_react-js-logo-png-transparent-png.png"
                      alt="mongodb"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="theback">
                    <p className="mt-4 fs-2">React</p>
                  </div>
                </div>
              </div>
              <div
                className="maincontainer"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="thecard">
                  <div className="thefront">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgvMRkOJg4USgb57gvpnkY-ovg7Ock9L1ktZnN5NX27uwDrAk9qvYHwDtmSw8gbBWcQxU&usqp=CAU"
                      alt="mongodb"
                      className="img-fluid rounded"
                    />
                  </div>
                  <div className="theback">
                    <p className="mt-4 fs-5 pt-2">BootStrap</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
