import "../../App.css";
import resume from "../../assets/Shoaib-Muhammad-Resume.pdf";

export default function Header() {
  return (
    <>
      <div className="container-fluid px-0 header">
        <div className="container text-center" id="home">
          <h1
            className=" text-dark text-uppercase fw-bold"
            id="myName"
            data-aos="fade-up"
          >
            Hey, I'm Shoaib Muhammad
          </h1>
          <p className="heading mx-auto mt-4" data-aos="fade-up">
            A focused MERN Stack Developer building the Frontend and Backend of
            Websites and Web Applications that leads to the success of the
            overall product
          </p>
          <a
            className="btn btn-warning cv-btn mt-3 mx-auto fw-bold rounded text-uppercase"
            href={resume}
            download="Shoaib Muhammad Resume"
            data-aos="fade-up"
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}
