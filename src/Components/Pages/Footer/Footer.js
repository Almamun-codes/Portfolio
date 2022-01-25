import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-footer bg-skin text-white pb-5 position-relative">
        <div>
          <a href="#">
            <span className="px-2 rounded bg-white">
              <i class="fas fa-angle-up"></i>
            </span>
          </a>
          <br />
          <span>
            Made with{" "}
            <span>
              <i class="fas fa-heart fs-3 text-red"></i>
            </span>{" "}
            by Abdullah Al Mamun
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
