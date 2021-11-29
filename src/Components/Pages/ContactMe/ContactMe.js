import React from "react";
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
      <div className="bg-dark bg-contact text-start py-5">
        <div className="container my-5">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-lg-8">
              <div className="row bg-light p-5 rounded">
                <h2 className="text-skin mb-2 border-bottom border-3 border-primary">
                  SEND AN E-MAIL
                </h2>
                <div className="col-8">
                  <div className="border rounded border-2">
                    <form onSubmit="" className="p-3">
                      <label>Name</label>
                      <br />
                      <input className="w-100" type="text" name="name"></input>
                      <br />
                      <br />
                      <label>E-mail</label> <br />
                      <input className="w-100" type="text" name="email"></input>
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
                <div className="col-4 rounded bg-skin"></div>
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
