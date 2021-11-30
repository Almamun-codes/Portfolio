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
      <div className="container mt-4">
        <h1 className="py-2 text-white">{project?.title}</h1>
        <div className="col-sm-12 py-3">
          <div className=" mx-3 p-2 bg-secondary shadow-lg rounded">
            <div className="project-detail-image">
              <div className="d-flex flex-wrap">
                <div className="col-4">
                  <img src={project?.img1} className="img-fluid p-2" alt="" />
                </div>
                <div className="col-4">
                  <img src={project?.img2} className="img-fluid p-2" alt="" />
                </div>
                <div className="col-4">
                  <img src={project?.img3} className="img-fluid p-2" alt="" />
                </div>
              </div>
            </div>
            <p className="text-justify bg-light p-4 rounded m-3">
              Summury: <br />
              {project?.description}
            </p>
            <div className="position-absolute w-100 p-2  bottom-0 start-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
