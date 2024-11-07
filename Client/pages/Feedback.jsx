import FeedbackFetch from "../components/FeedbackFetch";

export default function Feedback() {
  return (
    <>
      <section
        className="section pt-3"
        id="about-us"
        style={{ backgroundColor: "#eeedeb" }}
      >
        <div className="container">
          <div className="grid">
            <div className="g-col-6" style={{ marginBottom: "5rem" }}>
              <h2
                className="m-auto"
                style={{
                  fontSize: "3rem",
                  padding: "1rem 0rem",
                  width: "fit-content",
                  borderBottom: "5px solid orange",
                }}
              >
                Feedbacks
              </h2>
            </div>
            <div className="g-col-6">
              <FeedbackFetch />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
