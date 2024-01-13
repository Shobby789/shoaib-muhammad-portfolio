import "../../App.css";
import { projects } from "../../data/ProjectsData";

export default function Projects() {
  return (
    <>
      <div className="container-fluid py-5" id="portfolio">
        <h2
          className="fs-1 fw-bold text-center mt-5 mb-3 text-uppercase"
          data-aos="fade-up"
        >
          Projects
        </h2>
        <div
          className="bg-warning mx-auto rounded"
          style={{ width: 50, border: "3px solid #fdcf28" }}
          data-aos="fade-up"
        ></div>
        <p
          className="mx-auto w-75 mt-4 fs-5 text-center pb-5"
          data-aos="fade-up"
        >
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study
        </p>
        <div className="container pb-5 d-flex justify-content-evenly align-items-center flex-wrap">
          {projects.map((project) => {
            return (
              <a
                href={project.websiteUrl}
                target="_blank"
                className="card text-decoration-none text-dark mb-5 border-0 d-inline-block project-card"
                key={project.id}
                id={project.id}
                data-aos="fade-up"
              >
                <img
                  src={project.image}
                  className="card-img-top h-100"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{project.name}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
