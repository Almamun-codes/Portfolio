import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Speedy delivery Service",
      img: "https://i.ibb.co/JdMhG6p/image.png",
      link: "https://speedy-delivery-service.web.app/",
      description:
        "This is a website for delivery service. It took me 2 days to build this site. Implemented firebase Authencation. Authority can add, delete or modify a product. User has the ability to order and cancel order",
    },
    {
      title: "Speedy delivery Service",
      img: "https://i.ibb.co/JdMhG6p/image.png",
      link: "https://speedy-delivery-service.web.app/",
      description:
        "This is a website for delivery service. It took me 2 days to build this site. Implemented firebase Authencation. Authority can add, delete or modify a product. User has the ability to order and cancel order",
    },
    {
      title: "Speedy delivery Service",
      img: "https://i.ibb.co/JdMhG6p/image.png",
      link: "https://speedy-delivery-service.web.app/",
      description:
        "This is a website for delivery service. It took me 2 days to build this site. Implemented firebase Authencation. Authority can add, delete or modify a product. User has the ability to order and cancel order",
    },
    {
      title: "Speedy delivery Service",
      img: "https://i.ibb.co/JdMhG6p/image.png",
      link: "https://speedy-delivery-service.web.app/",
      description:
        "This is a website for delivery service. It took me 2 days to build this site. Implemented firebase Authencation. Authority can add, delete or modify a product. User has the ability to order and cancel order",
    },
    {
      title: "Speedy delivery Service",
      img: "https://i.ibb.co/JdMhG6p/image.png",
      link: "https://speedy-delivery-service.web.app/",
      description:
        "This is a website for delivery service. It took me 2 days to build this site. Implemented firebase Authencation. Authority can add, delete or modify a product. User has the ability to order and cancel order",
    },
  ];
  return (
    <div className="bg-skin text-white pt-5">
      <div className="container py-5">
        <span className="heading bg-dark">Best Projects</span>
        <div className="row justify-content-center g-0">
          {projects.map((project) => (
            <div className="col-sm-12 col-lg-4">
              <div className="m-5 p-2 bg-dark shadow-lg rounded">
                <img
                  src={project.img}
                  alt={project.title}
                  className="img-fluid img-thumbnail"
                />

                <a
                  className="text-decoration-none text-white"
                  href={project.link}
                >
                  <h4 className="mt-2">{project.title}</h4>
                </a>
                <p className="text-justify px-3">{project.description}</p>
                <button className="w-100 btn bg-skin text-white">
                  Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-projects"></div>
    </div>
  );
};

export default Projects;
