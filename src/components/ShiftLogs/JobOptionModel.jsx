import React from "react";
import "./JobOptionModel.scss";
import locum from "../../asset/layout/locum.svg";
import parmanent from "../../asset/layout/parmanent.svg";
import { useDispatch } from "react-redux";
import { setModel } from "../../redux/userReducer";

function JobOptionModel(props) {
  let dispatch = useDispatch();
  function handleJobPost(jobType) {
    dispatch(setModel());
  }
  return (
    <div className="model-card">
      <div className="model-card-wrapper">
        <div className="model-card-top">
          <h3>Post a Job</h3>
          <p>Please choose appropriate type of post</p>
        </div>
        <div className="model-card-bottom">
          <div className="locum-job">
            <img src={locum} alt="locum" />
            <button onClick={() => handleJobPost("locum")}>Locum</button>
          </div>
          <div className="permanent-job">
            <img src={parmanent} alt="parmanent" />
            <button onClick={() => handleJobPost("permanent")}>
              Permanent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobOptionModel;
