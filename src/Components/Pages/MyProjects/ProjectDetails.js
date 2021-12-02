import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const project = projects.find((item) => item.id === id);
  return (
    <div className="bg-details py-5">
      <div className="container-fluid mt-4">
        <h1 className="py-2 text-white" style={{ font: "Tahoma" }}>
          {project?.title}
        </h1>
        <div className=" mx-3 p-2 bg-about shadow-lg rounded">
          <div className="row g-0 p-3">
            <div className="col-sm-12 col-lg-6">
              <div className="row g-0 border m-2 border-3 h-100 rounded">
                <div className="col-lg-12 col-sm-12">
                  <img
                    src={project?.img1}
                    className="img-fluid rounded p-2 w-100"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <img
                    src={project?.img2}
                    className="img-fluid rounded p-2"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-sm-12">
                  <img
                    src={project?.img3}
                    className="img-fluid rounded p-2"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="text-justify h-100 bg-secondary p-2 rounded m-2">
                <div className="">
                  <div className="col-12">
                    <div className="m-2 p-2 bg-light rounded">
                      <h3>Summury: </h3>
                      <p>{project?.description}</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="m-2 p-2 bg-light rounded">
                      <h3>Features </h3>
                      <ul>
                        {project?.features.map((feature) => (
                          <li>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <h4 className="text-start mx-2 text-white">
                  Technologies Used:{" "}
                </h4>
                <div className="d-flex flex-wrap justify-content-start m-2 bg-light rounded">
                  {project?.technologies.map((item) => (
                    <div className="px-3 bg-dark rounded text-white py-1 m-2">
                      {item}
                    </div>
                  ))}
                </div>
                <h4 className="text-start mx-2 text-white">Links: </h4>
                <a href={project?.links[0]}>
                  <div className="btn btn-dark m-2">Live site</div>
                </a>
                <a href={project?.links[1]}>
                  <div className="btn btn-dark m-2">Source Code</div>
                </a>
                <a href={project?.links[2]}>
                  <div className="btn btn-dark m-2">Server Code</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
