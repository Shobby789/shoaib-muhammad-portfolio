import "../../App.css";
import { BiLogoUpwork } from "react-icons/bi";
import { TbBrandFiverr } from "react-icons/tb";
import { FaInstagram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoFacebook } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <footer
        className="container-fluid py-5 footer"
        style={{ background: "black" }}
      >
        <div className="row py-3">
          <div className="col-lg-6 col-md-6 col-sm-12 text-center text-white introColumn">
            <h3 className="text-uppercase fw-bold" data-aos="fade-up">
              Shoaib Muhammad
            </h3>
            <p
              className="myIntro fs-6 my-3 w-75 mx-auto text-center"
              data-aos="fade-up"
            >
              I'm a MERN Stack Developer based in Karachi, Pakistan. I strive to
              build immersive and beautiful web applications through carefully
              crafted code and user-centered design.
            </p>
          </div>
          {/* social links */}
          <div className="col-lg-6 col-md-6 col-sm-12 text-white text-center">
            <h4 className="text-end text-white text-uppercase fw-bold social text-center mt-1">
              Social Accounts
            </h4>
            <p className="text-end fs-4 text-center mt-3">
              <span>
                <a
                  className="mx-1 text-decoration-none fs-5"
                  href="https://www.facebook.com/profile.php?id=100047880797925"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#f8f9fc" }}
                  data-aos="fade-up"
                >
                  <BiLogoFacebook />
                </a>
              </span>
              <span>
                <a
                  className="mx-2 text-decoration-none fs-5"
                  href="www.linkedin.com/in/muhammad-shoaib-mern-stack-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#f8f9fc" }}
                  data-aos="fade-up"
                >
                  <BiLogoLinkedin />
                </a>
              </span>
              <span>
                <a
                  className="mx-2 text-decoration-none fs-5"
                  href="https://github.com/Shobby789"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#f8f9fc" }}
                  data-aos="fade-up"
                >
                  <AiFillGithub />
                </a>
              </span>
              <span>
                <a
                  className="mx-2 text-decoration-none fs-5"
                  href="https://www.instagram.com/iam_shoaibmemon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#f8f9fc" }}
                  data-aos="fade-up"
                >
                  <FaInstagram />
                </a>
              </span>
              <span>
                <a
                  className="mx-2 text-decoration-none fs-5"
                  href="https://www.fiverr.com/shobby_123?public_mode=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#f8f9fc" }}
                  data-aos="fade-up"
                >
                  <TbBrandFiverr />
                </a>
              </span>
              <span>
                <a
                  className="mx-1 text-decoration-none fs-5"
                  href="https://www.upwork.com/freelancers/~01569d7816c10e78aa?viewMode=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#f8f9fc" }}
                  data-aos="fade-up"
                >
                  <BiLogoUpwork />
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
