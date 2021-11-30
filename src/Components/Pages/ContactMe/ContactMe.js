import React from "react";
import resume from "../../../img/Abdullah-al-mamun-resume.pdf";

// import emailjs from "emailjs-com";

const ContactMe = () => {
  // const handleEmail = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //     "service_yap3umg",
  //     "template_ayy3pdi",
  //     e.target,
  //     "user_NVCylLmGcXsfPXaroQ9H7"
  //   );
  // };
  return (
    <div>
      <div className="bg-skin bg-contact text-start py-5">
        <div className="my-5">
          <div className="row g-0 justify-content-center">
            <div className="col-sm-12 col-lg-8">
              <div className="bg-light m-2 p-3 shadow rounded">
                <h2 className="text-skin mb-2 border-bottom border-3 border-primary">
                  SEND AN E-MAIL
                </h2>
                <div className="row g-0">
                  <div className="col-lg-8 col-sm-12 my-2">
                    <div className="border text-black mx-2 rounded border-2">
                      <form onSubmit="" className="p-3">
                        <label>Name</label>
                        <br />
                        <input
                          className="w-100"
                          type="text"
                          name="name"
                        ></input>
                        <br />
                        <br />
                        <label>E-mail</label> <br />
                        <input
                          className="w-100"
                          type="text"
                          name="email"
                        ></input>
                        <br />
                        <br />
                        <label>Subject</label> <br />
                        <input
                          className="w-100"
                          type="text"
                          name="subject"
                        ></input>
                        <br />
                        <br />
                        <label>Message</label>
                        <br />
                        <textarea
                          name="message"
                          className="w-100"
                          rows="5"
                        ></textarea>
                        <br />
                        <br />
                        <button className="btn bg-skin" type="submit">
                          Send
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-4 col-sm-12 rounded my-2 bg-skin">
                    <div className="p-3">
                      <h3 className="border-bottom border-2 ps-2 my-3">
                        Contact Me
                      </h3>
                      <div className="d-flex my-4 ps-2">
                        <p>
                          <i class="fas fa-map-marker-alt fs-2 me-3 mt-2"></i>
                        </p>

                        <p>4702, Idgaon, Cox's Bazar, Bangladesh.</p>
                      </div>

                      <div className="d-flex my-4 ps-2">
                        <i class="fas fa-phone-alt fs-3 me-3"></i>
                        <p>+88 01888-211331</p>
                      </div>
                      <a
                        href="https://www.github.com/almamun-codes"
                        target="_blank"
                        rel="noreferrer"
                        className="text-decoration-none text-white"
                      >
                        <div className="d-flex my-4 pt-2 ps-2 contact-items">
                          <i class="fab fa-github fs-3 me-3"></i>
                          <p>Follow on GitHub</p>
                        </div>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/a1mamun"
                        className="text-decoration-none text-white"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="d-flex my-4 pt-2 ps-2 contact-items">
                          <i class="fab fa-linkedin fs-3 me-3"></i>
                          <p>Connect on LinkedIn</p>
                        </div>
                      </a>
                      <a
                        href={resume}
                        className="text-decoration-none text-white"
                        download="Abdullah's-resume"
                      >
                        <div className="d-flex mt-4 pt-2 ps-2 contact-items">
                          <i class="fas fa-file fs-3 me-3"></i>
                          <p>Get my resume</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default ContactMe;
