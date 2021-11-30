import React from "react";

const MyProjects = () => {
  const projects = [
    {
      title: "Friends Unity Org",
      img: "https://i.ibb.co/V9gZCQv/image.png",
      link: "https://friends-unity-organization.web.app/",
      description:
        "This is a website for a oraganization. A responsive sidebar has added in this website. also firebase password authentication, user profile with image upload system and some othe features addded.",
    },
    {
      title: "Lenshow Sunglass Shop",
      img: "https://i.ibb.co/8P7wZLr/image.png",
      link: "https://lenshow-online-shop.web.app/",
      description:
        "This website is used for a niche website based on sunglasses. Implemented Dashboard system with different routes for users and admins user can place and cancel order. admin can add, delete or modify products.",
    },
    {
      title: "Speedy delivery Service",
      img: "https://i.ibb.co/JdMhG6p/image.png",
      link: "https://speedy-delivery-service.web.app/",
      description:
        "This is a website for delivery service. It took me 2 days to build this site. Implemented firebase Authencation. Authority can add, delete or modify a product. User has the ability to order and cancel order",
    },
    {
      title: "SMILE Hospital",
      img: "https://i.ibb.co/RpBzfyT/image.png",
      link: "https://speedy-delivery-service.web.app/",
      description:
        "Website for a hospital called Smile Hospital. User Authentication with firebase password and google. different routes and user info showed in navigation bar. Details page for services and dorctos.",
    },
    {
      title: "Tour Master",
      img: "https://i.ibb.co/y6Sh89M/image.png",
      link: "https://distracted-northcutt-eab708.netlify.app/",
      description:
        "A website to keep track of your travel log. User can see places and can make a wish list. Calculates total cost and other fields. User can modify the log of travels.",
    },
  ];
  return (
    <div className="bg-skin text-white pt-5">
      <div className="container py-5">
        <h1 className="bg-dark p-2 rounded">My Projects</h1>
        <div className="row justify-content-center mt-4 g-0">
          {projects.map((project) => (
            <div className="col-sm-12 col-lg-6 my-3">
              <div className="mx-4 p-2 position-relative bg-dark h-100 shadow-lg rounded">
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
                <p className="text-justify px-3 mb-5">{project.description}</p>
                <div className="position-absolute w-100 p-2  bottom-0 start-0">
                  <button className="w-100 btn bg-skin text-white">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-projects"></div>
    </div>
  );
};

export default MyProjects;
