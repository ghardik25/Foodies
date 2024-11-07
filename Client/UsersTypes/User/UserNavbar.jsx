import { NavLink } from "react-router-dom";
import logo from "../../Images/Logo.png";

const UserNavbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg position-sticky top-0 z-1"
        data-bs-theme="light"
      >
        <div className="container" style={{ width: "100%" }}>
          {/* Logo */}
          <NavLink to="/user" className="navbar-brand">
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
                <NavLink to="/user" className="nav-link" aria-current="page">
                  Home
                </NavLink>
              </li>

              <li className="nav-item mx-5">
                <NavLink to="/user/menu" className="nav-link">
                  Menu
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink to="/user/feedback" className="nav-link">
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink to="/user/cart" className="nav-link">
                  Cart
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink to="/user/logout" className="nav-link">
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default UserNavbar;
