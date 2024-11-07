export default function AdminDeleteUserForm({
  userinfo,
  handleInput,
  handleSubmit,
}) {

  return (
    <>
      <section
        className="section"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
      >
        <div className="container">
          <div className="grid">
            <div className="g-col-6">
              <h2
                className="m-auto mb-5 pt-5"
                style={{
                  fontSize: "3rem",
                  paddingBottom: "1rem",
                  width: "fit-content",
                  borderBottom: "5px solid orange",
                }}
              >
                Delete User
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container text-white w-50">
                <div className="row" style={{ margin: "0rem 3rem" }}>
                  {/* Col-1 */}
                  <div
                    className="col card shadow-lg p-5 mb-4 rounded"
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
                      <form
                        className="row g-3"
                        method="POST"
                        onSubmit={handleSubmit}
                      >
                        <div className="col-md-12">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Your College Email"
                            name="email"
                            value={userinfo.email}
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
                            Delete
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
