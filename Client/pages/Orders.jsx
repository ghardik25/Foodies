export default function Orders() {
    return (
      <>
        <section
          className="section pt-3"
          id="about-us"
          style={{ backgroundColor: "#eeedeb", height: '100vh'}}
        >
          <div className="container">
            <div className="grid">
              <div className="g-col-6 text-start">
                <h2
                  style={{
                    fontSize: "3rem",
                    padding: "1.5rem 0rem 1rem 0rem",
                    width: "fit-content",
                    margin: "0rem 5rem 5rem 5rem",
                    borderBottom: "5px solid orange",
                  }}
                >
                  Orders
                </h2>
              </div>
              <div className="g-col-6">
                <div className="container text-center text-white">
                  <div className="row" style={{margin: '0rem 3rem'}}>
                    {/* Col-1 */}
                    <div className="col card shadow-lg p-5 mb-5 rounded"
                        style={{
                          height: "fit-content",
                          backgroundColor: "#eeedeb",
                          display: "flex",
                          alignItems: "center",
                          border: "none",
                          borderStyle: "none",
                        }}>
                        <div className="card-body">
                          <h3 className="card-title mb-4">Coming Soon...</h3>
                        </div>
                      {/* </div> */}
                    </div>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }