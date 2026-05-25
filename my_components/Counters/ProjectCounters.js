import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";


const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});





const ProjectCounters = ({ name_1, counter_1, name_2, counter_2, name_3, counter_3 }) => {

  // State to store three different counter values
  const [counts, setCounts] = useState([0, 0, 0]);
  const info = [name_1, name_2, name_3];

  useEffect(() => {
    setTimeout(() => {
      // Update counters dynamically
      setCounts([counter_1, counter_2, counter_3]); 
    }, 500); // Delay to trigger animation
  }, []);


  return (

    <div className="container">
      <div className="row g-5">
        {counts.map((count, index) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
            <div className="rbt-counterup style-3">
              <div className="inner">
                <div className="content">
                  <h2 className="counter">
                    <span className="odometer">
                      <Odometer value={count} />
                    </span>
                  </h2>
                  <span className="subtitle">{info[index]}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );

};

export default ProjectCounters;
