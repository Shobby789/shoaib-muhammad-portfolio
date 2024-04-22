import "../../App.css";

export default function About() {
  const skills = [
    "React JS",
    "Node JS",
    "Express JS",
    "MongoDB",
    "HTML",
    "CSS",
    "JavaScript",
    "Redux Toolkit",
    "Bootstrap",
    "React Bootstrap",
    "Material UI",
    "Responsive Design",
    "Git",
    "GitHub",
    "Restful APIs",
    "Problem Solving",
    "Communication",
    "Time Management",
  ];
  return (
    <>
      <div
        className="container-fluid py-5"
        id="about-me"
        style={{ backgroundColor: "#f7fafa" }}
      >
        <div className="container text-center py-5">
          <h2 className="fs-1 text-uppercase fw-bold mb-3" data-aos="fade-up">
            About Me
          </h2>
          <div
            className="mx-auto rounded"
            data-aos="fade-up"
            style={{ width: 50, border: "3px solid #fdcf28" }}
          ></div>
          <p className="w-75 mx-auto mt-4 fs-5" data-aos="fade-up">
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </p>
          <div className="row pt-3">
            <div className="col-sm text-start pt-3">
              <h4
                className="fw-bold fs-2 mb-4"
                id="get-to-know-me"
                data-aos="fade-up"
              >
                Get to know me!
              </h4>
              <p className="get_to_Know_para" data-aos="fade-up">
                I'm a
                <span className="highlited-text"> MERN Stack Developer </span>
                building the Front-end and Back-end of Websites and Web
                Applications that leads to the success of the overall product.
                Check out some of my work in the
                <span className="highlited-text"> Projects </span>
                section.
              </p>
              <p className="get_to_Know_para" data-aos="fade-up">
                Currently I'm working as a full time
                <span className="highlited-text"> Web Developer</span> at{" "}
                <span className="highlited-text"> LaunchBox Pakistan</span>.
              </p>
              <p className="get_to_Know_para" data-aos="fade-up">
                I'm open to <span className="highlited-text">Job</span>{" "}
                opportunities where I can contribute, learn and grow. If you
                have a good opportunity that matches my skills and experience
                then don't hesitate to
                <span className="highlited-text"> contact me.</span>
              </p>
            </div>
            {/* Skills */}
            <div className="col-sm text-start ps-4 pt-3">
              <h4 className="fw-bold fs-2 mb-4" data-aos="fade-up">
                My Skills
              </h4>
              {skills.map((skill) => {
                return (
                  <button
                    type="button"
                    data-aos="fade-up"
                    className="btn border-0 fw-semibold"
                    disabled=""
                    style={{
                      backgroundColor: "rgb(232, 229, 229)",
                      margin: "6px",
                      padding: "10px 15px",
                      cursor: "text",
                    }}
                    key={skill}
                  >
                    {skill}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
