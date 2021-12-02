import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MyProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="bg-skin text-white pt-5 animated">
      <div className="container py-5">
        <h1 className="bg-light text-black p-2 rounded">My Projects</h1>
        <div className="row justify-content-center mt-4 g-0">
          {projects.map((project) => (
            <div className="col-sm-12 col-lg-6 my-3">
              <div className="mx-4 p-2 position-relative bg-light h-100 shadow-lg rounded">
                <div className="">
                  <img
                    src={project.img1}
                    alt={project.title}
                    className="img-fluid img-thumbnail"
                  />
                </div>

                <a
                  className="text-decoration-none text-black"
                  href={project.link}
                >
                  <h4 className="mt-2 text-black">{project.title}</h4>
                </a>
                <p className="text-justify px-3 mb-5 text-black">
                  {project.description}
                </p>
                <div className="position-absolute w-100 p-2  bottom-0 start-0">
                  <Link to={`/project/${project.id}`}>
                    <button className="w-100 btn bg-skin text-white">
                      Details
                    </button>
                  </Link>
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
