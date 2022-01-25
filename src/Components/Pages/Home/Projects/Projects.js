import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const projects = [
    {
      id: "1",
      title: "Friends Unity Org",
      features: [
        "A responsive sidemenu added which will toggle in small devices.",
        "Users can log in only with their password. No other login system for security.",
        "Logged in users can see the profile menu and able  to modify own profile.",
        "Guest users will see a outstanding UI and Some basic work of the organization.",
        "Backend site has been added for administration.",
      ],
      img1: "https://i.ibb.co/D7Qv4XJ/image.png",
      img2: "https://i.ibb.co/qyvTHL6/image.png",
      img3: "https://i.ibb.co/tsgS9k4/Untitled-design-2.png",
      links: [
        "https://friends-unity-organization.web.app/",
        "https://github.com/Almamun-codes/Organization",
        "https://github.com/Almamun-codes/Organization-server",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      description:
        "This is a website for a oraganization. The organization has some projects to show on the site. They Need a user profile where a users all data will be shown. A next event section for their next event. A sidemenu for small devices as its users will use this site in smartphones.",
    },
    {
      id: "2",
      title: "Lenshow Sunglass Shop",
      features: [
        "Firebase password and google login system implemented for User Authentication.",
        "Users can explore products and order or cancel his own order.",
        "Different Dashboard system for users and admin",
        "A user can add a review on his choice which will be displayed in homepage.",
        "Admin can administrate the site for expample managing orders and products.",
      ],
      img1: "https://i.ibb.co/hy1ccbJ/image.png",
      img2: "https://i.ibb.co/pfxZcNW/image.png",
      img3: "https://i.ibb.co/pK6jMcG/image.png",
      links: [
        "https://lenshow-online-shop.web.app/",
        "https://github.com/Almamun-codes/lenshow-sunglassShop-webapp-clientsite",
        "https://github.com/Almamun-codes/lenshow-sunglassShop-webapp-serversite",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      description:
        "This website is used for a niche website based on sunglasses. Some products, header banner and user review should be shown on the homepage. Admins and users should see different routes in Dashboard. User Authentication with password should be implented. A user should be able to add a review.",
    },
    {
      id: "3",
      title: "Speedy delivery Service",
      features: [
        "Firebase password and google login system implemented for User Authentication.",
        "Guest users can only see products and about page.",
        "Logged in users can order products, see own orders and can cancel them.",
        "Logged in Admin has some other pages like product management and order management where only an admin can modify.",
        "Backend site has been added for more administration.",
      ],
      img1: "https://i.ibb.co/5FmwfGM/image.png",
      img2: "https://i.ibb.co/JybQQty/image.png",
      img3: "https://i.ibb.co/bXJnHb0/image.png",
      links: [
        "https://speedy-delivery-service.web.app/",
        "https://github.com/Almamun-codes/Speedy-delivery-web-app-clientside",
        "https://github.com/Almamun-codes/speedy-web-app-server-site",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      description:
        "This is a website for delivery service. Home page should show packages and other sections. Different packages should show on services page. User should be able to place order with delivery information and has to have the ability to cancel an order. admins should see manage orders and manage service page where they can approve orders and add services.",
    },
    {
      id: "4",
      title: "SMILE Hospital",
      features: [
        "Firebase google login system implemented for User Authentication.",
        "Guest users can see some basic information about the hospital.",
        "Logged in users can see all the doctors and tests.",
        "User Profie to keep track of users medical history",
        "Online meeting placement system for visiting doctor in emergency.",
      ],
      img1: "https://i.ibb.co/pfQBX6g/image.png",
      img2: "https://i.ibb.co/VLRjYWv/image.png",
      img3: "https://i.ibb.co/jTn7WPy/image.png",
      links: [
        "https://speedy-delivery-service.web.app/",
        "https://github.com/Almamun-codes/smile-hospital-webapp",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      description:
        "Website for a hospital called Smile Hospital. Guest users should see the services and some of the doctors in homepage. User should be able to log in and see all the doctors in a different page. A user should have a profile page to see keep his medical history.",
    },
    {
      id: "5",
      title: "Tour Master",
      features: [
        "Firebase password and google login system implemented for User Authentication.",
        "Guest users can see places of Bangladesh to visit.",
        "A logged in user can add a place to wishlist.",
        "User profile shows the data about users and his personal travel log.",
        "Backend site has been added for admininstration like place management.",
      ],
      img1: "https://i.ibb.co/ZNjX1FW/image.png",
      img2: "https://i.ibb.co/PQcm1CL/image.png",
      links: [
        "https://distracted-northcutt-eab708.netlify.app/",
        "https://github.com/Almamun-codes/TourMaster",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Bootstrap",
        "HTML",
        "CSS",
      ],
      description:
        "A website to keep track of Users travel log. A logged in user should see his profile page where he can find his travel log. Guest users should see places the owner decides to see. admin should be able to add or delete a place and modify places informations.",
    },
  ];

  // AOS initializing
  AOS.init();

  return (
    <div id="projects" className="bg-dark text-white pt-5">
      <div className="container py-5">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="fs-5 font-cursive">B E S T - O F</p>
          <span className="fs-1 border-2 gradient-text  border-top rounded">
            My Projects
          </span>
        </div>
        <div className="row justify-content-center mt-4 g-0">
          <div
            className="col-sm-12 col-lg-4 my-3"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="mx-3 p-2  bg-light h-100 shadow-lg rounded">
              <div className="project-holder">
                <div className="project-img">
                  <img
                    src={projects[0].img1}
                    alt={projects[0].title}
                    className="img-fluid img-thumbnail"
                  />
                </div>
                <div className="project-details">
                  <a
                    className="text-decoration-none text-white"
                    href={projects[0].links[0]}
                  >
                    <h4 className="mt-2 text-white">{projects[0].title}</h4>
                  </a>
                  <p className="text-justify text-white px-3 mb-5">
                    {projects[0].description}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <Link to={`/project/${projects[0].id}`}>
                  <button className="w-100 btn  btn-gradient">Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-4 my-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="mx-3 p-2 bg-light h-100 shadow-lg rounded">
              <div className="project-holder">
                <div className="project-img">
                  <img
                    src={projects[1].img1}
                    alt={projects[1].title}
                    className="img-fluid h-100"
                  />
                </div>
                <div className="project-details">
                  <a
                    className="text-decoration-none text-white"
                    href={projects[1].links[0]}
                  >
                    <h4 className="mt-2 text-white">{projects[1].title}</h4>
                  </a>
                  <p className="text-justify text-white px-3 mb-5">
                    {projects[1].description}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <Link to={`/project/${projects[1].id}`}>
                  <button className="w-100 btn btn-gradient">Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-4 my-3"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className="mx-3 p-2  bg-light h-100 shadow-lg rounded">
              <div className="project-holder">
                <div className="project-img">
                  <img
                    src={projects[2].img1}
                    alt={projects[2].title}
                    className="img-fluid"
                  />
                  <div className="project-details">
                    <a
                      className="text-decoration-none text-white"
                      href={projects[2].links[0]}
                    >
                      <h4 className="mt-2 text-white">{projects[2].title}</h4>
                    </a>
                    <p className="text-justify text-white px-3 mb-5">
                      {projects[2].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <Link to={`/project/${projects[0].id}`}>
                  <button className="w-100 btn  btn-gradient">Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-4 my-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="mx-3 p-2  bg-light h-100 shadow-lg rounded">
              <div className="project-holder">
                <div className="project-img">
                  <img
                    src={projects[3].img1}
                    alt={projects[3].title}
                    className="img-fluid"
                  />
                  <div className="project-details">
                    <a
                      className="text-decoration-none text-white"
                      href={projects[3].links[0]}
                    >
                      <h4 className="mt-2 text-white">{projects[3].title}</h4>
                    </a>
                    <p className="text-justify text-white px-3 mb-5">
                      {projects[3].description}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <Link to={`/project/${projects[0].id}`}>
                  <button className="w-100 btn  btn-gradient">Details</button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-sm-12 col-lg-4 my-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="mx-3 p-2  bg-light h-100 shadow-lg rounded">
              <div className="project-holder">
                <div className="project-img">
                  <img
                    src={projects[4].img1}
                    alt={projects[4].title}
                    className="img-fluid"
                  />
                </div>
                <div className="project-details">
                  <a
                    className="text-decoration-none text-white"
                    href={projects[4].links[0]}
                  >
                    <h4 className="mt-2 text-white">{projects[4].title}</h4>
                  </a>
                  <p className="text-justify text-white px-3 mb-5">
                    {projects[4].description}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <Link to={`/project/${projects[0].id}`}>
                  <button className="w-100 btn  btn-gradient">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-projects"></div>
    </div>
  );
};

export default Projects;
