import { useNavigate } from "react-router-dom";
import MenuFetch from "../../components/MenuFetch";

export default function CanteenMenu() {
    const navigate = useNavigate();
  return (
    <>
      <section
        className="section pt-3"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
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
                Canteen Menu
              </h2>
            </div>
            <div className="g-col-6">
              <div className="container text-center text-white">
                <div className="row" style={{ margin: "0rem 3rem" }}>
                  {/* Col-1 */}
                  <div className="col card shadow-lg p-5 mb-5 rounded menu-card">
                    <div className="card-body">
                      <h3 className="card-title mb-4">Coming Soon...</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section pt-5"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
      >
        <div className="container">
          <div className="grid">
            <div className="row align-items-center mx-5">
              <div className="col">
                <h2
                  className="mb-5 ms-3"
                  style={{
                    fontSize: "3rem",
                    padding: "1rem 0rem",
                    width: "fit-content",
                    borderBottom: "5px solid orange",
                  }}
                >
                  Mess Menu
                </h2>
              </div>
              <div className="col text-end">
                <button
                  className="btn shadow p-3 rounded button me-3 mb-3"
                  type="button"
                  onClick={() => navigate("/canteen/additem")}
                >
                  Add Item
                </button>
                <button
                  className="btn shadow p-3 rounded button mb-3 me-2"
                  type="button"
                  onClick={() => navigate("/canteen/deleteitem")}
                >
                  Delete Item
                </button>
              </div>
            </div>

            <div className="g-col-6">
              <div className="container text-center text-white">
                <div className="row" style={{ margin: "0rem 3rem" }}>
                  <MenuFetch />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
