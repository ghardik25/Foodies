import bg from "../Videos/Home_vid.mp4";

export default function Home() {
  return (
    <>
      <section>
        <div className="card">
          <div className="video-container">
            <video
              src={bg}
              className="card-img"
              alt="Error"
              autoPlay
              loop
              muted
            />
            <div className="overlay"></div>
          </div>
          <div className="card-img-overlay center" style={{ color: "white" }}>
            <h1
              className="card-title fw-bold my-0"
              style={{ fontSize: "8rem" }}
            >
              FOODIES
            </h1>
            <h2>Connecting You And Canteen</h2>
          </div>
        </div>
      </section>
    </>
  );
}
