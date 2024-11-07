import { useState, useEffect } from "react";

export default function Dinner({menuFetching}) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const result = await menuFetching("dinner");
      setData(result);
    };

    fetchData();
  }, [menuFetching]);

  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card m-auto shadow-lg p-3 mb-5 rounded menu-card">
          <div className="card-body w-100">
            <h3
              className="card-title mb-4 pb-2"
              style={{ borderBottom: "4px solid orange" }}
            >
              Dinner
            </h3>
            <div className="row text-start mb-3">
              <div className="col-8 fw-bold">Items</div>
              <div className="col-4 fw-bold text-center">Rs.</div>
            </div>

            {/* Items */}
            <div className="row text-start">
              {Object.entries(data).map(([_, property]) => (
                <>
                  <div className="col-8">{property.dishName}</div>
                  <div className="col-4 text-center">{property.price}</div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
