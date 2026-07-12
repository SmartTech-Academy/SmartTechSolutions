import { useEffect, useState } from "react";
import CounterHead from "./Counter-Head";
import dynamic from "next/dynamic";

import CounterData from "@/data/elements/counter.json";



const Odometer = dynamic(() => import("react-odometerjs"), {
  ssr: false,
  loading: () => <span>00</span>,
});




const HomePageCounter = ({ head }) => {
  const [projects, setProjectsCount] = useState(0);
  const [talent, setTalentCount] = useState(0);
  const [clients, setClientsCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setProjectsCount(200);
      setTalentCount(350);
      setClientsCount(410);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {CounterData &&
        CounterData.counterSix.map((data, index) => (
          <div className="container" key={index}>
            
            <CounterHead
              bgClass="bg-primary-opacity"
              mb="mb--40"
              tag={""}
              title={
                <>
                  Our journey toward <br /> lasting success
                </>
              }
              subTitle={""}
              desc={"Since 2014, we have been a full-cycle product development company, blending creative vision with technical excellence to build user-centric solutions that solve real problems and drive business growth."}
            />

            <div className="row g-5">

                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key="completed-projects">
                  <div className="rbt-counterup style-3">
                    <div className="inner">
                      <div className="content">
                        <h2 className="counter">
                          <span className="odometer">
                            <Odometer value={projects} />
                          </span>
                        </h2>
                        <span className="subtitle">{"Completed Projects"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key="designers-and-developers">
                  <div className="rbt-counterup style-3">
                    <div className="inner">
                      <div className="content">
                        <h2 className="counter">
                          <span className="odometer">
                            <Odometer value={talent} />
                          </span>
                        </h2>
                        <span className="subtitle">{"Designers and Developers"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12" key="satisfied-clients">
                  <div className="rbt-counterup style-3">
                    <div className="inner">
                      <div className="content">
                        <h2 className="counter">
                          <span className="odometer">
                            <Odometer value={clients} />
                          </span>
                        </h2>
                        <span className="subtitle">{"Satisfied Clients"}</span>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        ))}
    </>
  );
};

export default HomePageCounter;
