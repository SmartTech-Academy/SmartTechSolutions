import React, { useState } from "react";
import Select from "react-select";

const AdditionalForm = () => {
  const [sortLevel, setSortByLevel] = useState({
    value: "English",
    label: "English",
  });

  const sortByLevelOptions = [
    { value: "Bangla", label: "Bangla" },
    { value: "Japan", label: "Japan" },
    { value: "Hindi", label: "Hindi" },
    { value: "Frence", label: "Frence" },
    { value: "Garmani", label: "Garmani" },
  ];
  return (
    <>
      <div
        id="accCollapseSix"
        className="accordion-collapse collapse"
        aria-labelledby="accSix"
        data-bs-parent="#tutionaccordionExamplea1"
      >
        <div className="accordion-body card-body rbt-course-field-wrapper rbt-default-form row row-15">
          <div className="col-lg-6">
            <div className="course-field mb--15">
              <label htmlFor="startDate">Start Date</label>
              <input type="date" id="startDate" name="startDate" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="course-field mb--15">
              <label htmlFor="language">Language</label>
              <div className="rbt-modern-select bg-transparent height-50 mb--10">
                {" "}
                <Select
                  instanceId="sortBySelect"
                  className="react-select react-select-full"
                  classNamePrefix="react-select"
                  defaultValue={sortLevel}
                  onChange={setSortByLevel}
                  options={sortByLevelOptions}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="course-field mb--15">
              <label htmlFor="whatLearn">Requirements</label>
              <textarea
                id="whatLearn"
                rows="5"
                placeholder="Add your course benefits here."
              ></textarea>
              <small className="d-block mt_dec--5">
                <i className="feather-info"></i> Enter for per line.
              </small>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="course-field mb--15">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="5"
                placeholder="Add your course benefits here."
              ></textarea>
              <small className="d-block mt_dec--5">
                <i className="feather-info"></i> Enter for per line.
              </small>
            </div>
          </div>

          <div className="col-lg-12">
            <hr className="mt--10 mb--20" />
          </div>

          <div className="col-lg-12">
            <div className="course-field mb--15">
              <label>Total Course Duration</label>
              <div className="row row--15">
                <div className="col-lg-6">
                  <input type="number" placeholder="00" />
                  <small className="d-block mt_dec--5">
                    <i className="feather-info"></i> Hour.
                  </small>
                </div>
                <div className="col-lg-6">
                  <input type="number" placeholder="00" />
                  <small className="d-block mt_dec--5">
                    <i className="feather-info"></i> Minute.
                  </small>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <hr className="mt--10 mb--20" />
          </div>

          <div className="col-lg-12">
            <div className="course-field mb--15">
              <label htmlFor="courseTag">Course Tags</label>
              <textarea
                id="courseTag"
                rows="5"
                placeholder="Add your course tag here."
              ></textarea>
              <small className="d-block mt_dec--5">
                <i className="feather-info"></i> Maximum of 15 keywords covering
                features, usage, and styling. Keywords should all be in
                lowercase and separated by commas. e.g. photography, gallery,
                modern, jquery, wordpress theme.
              </small>
            </div>
          </div>

          <div className="col-lg-12">
            <hr className="mt--10 mb--20" />
          </div>

          <div className="col-lg-12">
            <div className="course-field mb--15">
              <label htmlFor="targeted">Targeted Audience</label>
              <textarea
                id="targeted"
                rows="5"
                placeholder="Add your course tag here."
              ></textarea>
              <small className="d-block mt_dec--5">
                <i className="feather-info"></i> Specify the target audience
                that will benefit the most from the course.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalForm;
