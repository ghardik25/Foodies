import { NavLink } from "react-router-dom";
import logo from "../../Images/Logo.png";

const ViewNavbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-sticky top-0 z-1"
        data-bs-theme="light"
      >
        <div className="container" style={{ width: "100%" }}>
          {/* Logo */}
          <NavLink to="/" className="navbar-brand">
            <img
              src={logo}
              alt="LOGO"
              style={{
                height: "4.5rem",
                width: "5rem",
                mixBlendMode: "hard-light",
              }}
            />{" "}
            Foodies
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* List */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <NavLink to="/" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>

              <li className="nav-item mx-5">
                <NavLink to="/menu" className="nav-link">
                  Menu
                </NavLink>
              </li>

              <li className="nav-item mx-5">
                <NavLink to="/signup" className="nav-link">
                  Sign-Up
                </NavLink>
              </li>

              <li className="nav-item mx-5">
                <NavLink to="/login" className="nav-link">
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ViewNavbar;