export default function LoginForm({ userinfo, handleInput, handleSubmit }) {
  return (
    <>
      <section
        className="section pt-4"
        id="about-us"
        style={{ backgroundColor: "#eeedeb", height: "620px" }}
      >
        <div className="container">
          <div className="grid">
            <div className="g-col-6">
              <h2
                className="m-auto mb-5"
                style={{
                  fontSize: "3rem",
                  paddingBottom: "1rem",
                  width: "fit-content",
                  borderBottom: "5px solid orange",
                }}
              >
                Login
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container-fluid text-white">
                <div className="row" style={{ margin: "0rem 3rem" }}>
                  {/* Col-1 */}
                  <div
                    className="col-6 m-auto card shadow-lg p-5 mb-5 rounded"
                    style={{
                      height: "fit-content",
                      backgroundColor: "#eeedeb",
                      display: "flex",
                      alignItems: "center",
                      border: "none",
                      borderStyle: "none",
                    }}
                  >
                    <div className="card-body">
                      <form className="row g-3" method="POST" onSubmit={handleSubmit}>
                        <div className="col-md-12">
                          <label htmlFor="inputEmail4" className="form-label">
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your College Email"
                            name="email"
                            value={userinfo.email}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-12">
                          <label
                            htmlFor="inputPassword4"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            value={userinfo.password}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-12 text-end mt-5">
                          <button
                            type="submit"
                            className="btn btn-outline-danger"
                            style={{
                              width: "9rem",
                              height: "3rem",
                              fontSize: "1.1rem",
                            }}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
