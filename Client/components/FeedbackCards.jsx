import { useState, useEffect } from "react";

export default function FeedbackCards({ fetchingFeedback }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchingFeedback();
      setData(result);
    };

    fetchData();
  }, [fetchingFeedback]);
  return (
    <>
      <div className="container text-center text-white">
        <div className="row" style={{ margin: "0rem 3rem" }}>
          {Object.entries(data).map(([_, property]) => (
            <>
              {/* Feedback block/card */}
              <div className="col-sm-12 col-lg-4 col-md-6">
                <div className="card m-auto shadow-lg p-3 mb-5 rounded feedback-card">
                  <div className="card-body w-100">
                    <div className="grid text-start mb-4">
                      <div className="g-col-6 fw-bold mb-2">
                        {property.dishName}
                      </div>
                      <div className="g-col-6 fw-bold">
                        Rating:{" "}
                        <span className="rating">
                          &nbsp;{property.rating}⭐
                        </span>
                      </div>
                    </div>

                    {/* Items */}
                    {/* Item-1 */}
                    <div className="grid text-center">
                      <div className="g-col-6">
                        <p style={{ textAlign: "left" }}>{property.comment}</p>
                      </div>
                      <div className="g-col-6 text-end mt-4">
                        <p>{property.username}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
