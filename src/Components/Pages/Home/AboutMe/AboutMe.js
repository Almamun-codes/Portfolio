import React from "react";

const AboutMe = () => {
  return (
    <div className="bg-about py-5">
      <div className="container my-5 py-5">
        <div className="row g-0">
          <div className="col-sm-12 col-lg-6 px-3">
            <div className="mx-3">
              <img
                src="https://itechzo.com/wp-content/uploads/2020/04/Difference-Between-Mobile-Website-and-Responsive-Website.jpg"
                alt="devices"
                className="img-fluid rounded"
              />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="mx-3 text-start text-white mt-5">
              <h4 className="border-bottom border-2">About Me</h4>
              <p className="text-justify fs-5">
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
              <button className="btn btn-outline-light">Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
