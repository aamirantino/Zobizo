import React from "react";
import { useDispatch } from "react-redux";
import { setJobModal } from "../../../redux/userReducer";
import Reasonselect from "../../Common/DropDown/DropDown";
import "./JobModal.scss";
import TextareaAutosize from "@mui/base/TextareaAutosize";
function JobOptionModel(props) {
  let dispatch = useDispatch();
  function handleJobPost(jobType) {
    dispatch(setJobModal());
  }
  return (
    <div className="Jobmodel-card">
      <h3>Are you sure you want to cancel accepted job?</h3>
      <div className="Jobmodal-reason">
        <p>Reason to cancel:</p>
        <Reasonselect title={"Reason"} />
      </div>
      <div className="Jobmodal-comment">
        <h2>Comments*</h2>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={8}
          placeholder="Type Here"
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            background: "#F7F7F7",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="Jobmodal-buttonsDiv">
        <button className="Jobmodal-buttonsNo" onClick={() => handleJobPost()}>
          No
        </button>
        <button className="Jobmodal-buttonsYes" onClick={() => handleJobPost()}>
          Yes
        </button>
      </div>
    </div>
  );
}

export default JobOptionModel;
