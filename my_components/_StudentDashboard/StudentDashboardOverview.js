
import CounterWidget from "./widgets/CounterWidget";
import StudentDashboardHeader from "./sections/StudentDashboardHeader";
import StudentDashboardSidebar from "./sections/StudentDashboardSidebar";



const StudentDashboardOverview = () => {

  

  return (


        <div className="container mt--90 mb--150">
          <div className="row">
            <div className="col-lg-12">

              <div className="row g-5">

                <div className="col-lg-3">
                  <StudentDashboardSidebar />
                </div>

                <div className="col-lg-9">
                  <div className="rbt-dashboard-content bg-color-white rbt-shadow-box mb--60">
                    <div className="content">
                      <div className="section-title">
                        <h4 className="rbt-title-style-3">Dashboard</h4>
                      </div>
                      <div className="row g-5">
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <CounterWidget
                            counterStyle="two"
                            styleClass="bg-primary-opacity"
                            iconClass="bg-primary-opacity"
                            numberClass="color-primary"
                            icon="feather-book-open"
                            title="Enrolled Courses"
                            value={30}
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <CounterWidget
                            counterStyle="two"
                            styleClass="bg-secondary-opacity"
                            iconClass="bg-secondary-opacity"
                            numberClass="color-secondary"
                            icon="feather-monitor"
                            title="ACTIVE COURSES"
                            value={10}
                          />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                          <CounterWidget
                            counterStyle="two"
                            styleClass="bg-violet-opacity"
                            iconClass="bg-violet-opacity"
                            numberClass="color-violet"
                            icon="feather-award"
                            title="Completed Courses"
                            value={7}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>


  );

};

export default StudentDashboardOverview;
