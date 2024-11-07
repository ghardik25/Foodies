import gmail from "../Images/gmail.png";
import logo from "../Images/Logo.png";

export default function Footer() {
  return (
    <>
      <footer className="section pt-3" style={{ backgroundColor: "#d6d2cf" }}>
        <div className="container pt-4 pb-2">
          <div className="grid text-center">
            <div className="g-col-6">
              <div className="container text-center">
                <div className="row">
                  <div className="col-sm-12 col-md-2 col-lg-2">
                    <img
                      src={logo}
                      alt="LOGO"
                      className="pb-1"
                      style={{
                        height: "4.5rem",
                        width: "5rem",
                        mixBlendMode: "hard-light",
                      }}
                    />{" "}
                    <h4 className="d-inline">Foodies</h4>
                  </div>
                  <div className="col-sm-12 col-md-10 col-lg-10">
                    <div className="row">
                      {/* Col */}
                      <div
                        className="col d-flex"
                        style={{ flexFlow: "row-reverse" }}
                      >
                        {/* card-1 */}
                        <div
                          className="card mb-3"
                          style={{
                            width: "350px",
                            height: "60px",
                            borderStyle: "none",
                            background: "transparent",
                          }}
                        >
                          <div className="row g-0 p-2">
                            <div className="col-sm-12 col-md-3">
                              <img
                                src={gmail}
                                className="img-fluid rounded-start"
                                alt="..."
                                style={{ width: "3rem", height: "3rem" }}
                              />
                            </div>
                            <div className="col-sm-12 col-md-9">
                              <div className="card-body p-0 text-center">
                                <h5 className="card-title m-0">Contact Us</h5>
                                <p className="card-text">
                                  guptahardik666@gmail.com
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center p-2">
        <hr style={{ color: "black" }} />
          © 2024 — All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
