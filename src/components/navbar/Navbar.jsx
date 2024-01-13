import "../../App.css";

export default function Navbar() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-md navbar-white w-100 position-fixed"
        style={{ zIndex: 1000, backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <span
            className="bg-warning rounded-circle profilePhoto"
            // data-aos="fade-right"
          />
          <a
            className="navbar-brand fw-bold mx-2 text-dark text-uppercase"
            href="/"
            data-aos="fade-right"
          >
            Shoaib Muhammad
          </a>
          <button
            className="navbar-toggler border-0 menuBtn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars" style={{ color: "#040415" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item" data-aos="fade-right">
                <a
                  className="nav-link me-4 fw-bold text-uppercase"
                  aria-current="page"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item" data-aos="fade-right">
                <a
                  className="nav-link me-4 fw-bold text-uppercase"
                  href="#about-me"
                  // data-aos="fade-right"
                >
                  About
                </a>
              </li>
              <li className="nav-item" data-aos="fade-right">
                <a
                  className="nav-link me-4 fw-bold text-uppercase"
                  href="#portfolio"
                  // data-aos="fade-right"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item" data-aos="fade-right">
                <a
                  className="nav-link me-4 fw-bold text-uppercase"
                  href="#contact"
                  // data-aos="fade-right"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
