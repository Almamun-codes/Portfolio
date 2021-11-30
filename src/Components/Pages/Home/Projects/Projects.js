import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div className="bg-skin text-white pt-5">
      <div className="container py-5">
        <h1 className="bg-dark p-2 rounded">Best Projects</h1>
        <div className="row justify-content-center mt-4 g-0">
          {projects.map((project) => (
            <div className="col-sm-12 col-lg-4 my-3">
              <div className="mx-3 p-2 position-relative bg-dark h-100 shadow-lg rounded">
                <img
                  src={project.img}
                  alt={project.title}
                  className="img-fluid img-thumbnail"
                />

                <a
                  className="text-decoration-none text-white"
                  href={project.link}
                >
                  <h4 className="mt-2 text-skin">{project.title}</h4>
                </a>
                <p className="text-justify px-3 mb-5">{project.description}</p>
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

export default Projects;
