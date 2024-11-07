export default function AddFeedbackForm({
  userinfo,
  handleInput,
  handleSubmit,
}) {
  console.log(userinfo);
  return (
    <>
      <section
        className="section pb-2"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
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
                Add Feedback
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container text-white">
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
                        <div className="col-md-8">
                          <label className="form-label">Dish Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Dish Name (Ex: Butter Chicken)"
                            name="dishName"
                            value={userinfo.dishName}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-4">
                          <label className="form-label">
                            Rating (Out of 5)
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            placeholder="Enter Rating"
                            name="rating"
                            value={userinfo.rating}
                            onChange={handleInput}
                          />
                        </div>
                        <div className="col-md-12 mt-4">
                          {/* <label className="form-label">
                              Feedback
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Write Your Feedback/Comment"
                              name='comment'
                              // value={userinfo.comment}
                              onChange={handleInput}
                            /> */}
                          <label className="form-label">Feedback</label>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="4"
                            placeholder="Write Your Feedback/Comment"
                            name="comment"
                            value={userinfo.comment}
                            onChange={handleInput}
                          ></textarea>
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
                            Add Feedback
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
