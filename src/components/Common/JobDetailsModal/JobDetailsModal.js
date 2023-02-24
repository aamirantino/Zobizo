import { TextareaAutosize } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setJobDetaialsModal } from "../../../redux/userReducer";
import CommonInput from "../commonInput/commonInput";
import "./JobDetailsModal.scss";
const JobDetailsModal = () => {
  let dispatch = useDispatch();
  function handleJobPost(jobType) {
    dispatch(setJobDetaialsModal());
  }
  return (
    <div className="jobDetails-container">
      <p>Job Details</p>
      <div className="jobsDetails-inputWrapper">
        <CommonInput title={"Hospital"} value={"Hospital"} height={"40px"} />
        <CommonInput
          title={"Type of Professional"}
          value={"Type of Professional"}
          height={"40px"}
        />
      </div>
      <div className="jobsDetails-inputWrapper">
        <CommonInput
          title={"Department"}
          value={"Department"}
          height={"40px"}
        />
        <CommonInput
          title={"Qualification"}
          value={"Qualification"}
          height={"40px"}
        />
      </div>
      <div className="jobsDetails-inputWrapper">
        <CommonInput title={"Experience"} value={"Name"} height={"40px"} />
        <CommonInput title={"Shift"} value={"Shift"} height={"40px"} />
      </div>
      <div className="jobsDetails-inputWrapper">
        <CommonInput
          title={"No. of Jobs"}
          value={"No. of Jobs"}
          height={"40px"}
        />
      </div>
      <div className="detailsModal-desc">
        <p>Job description</p>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={4}
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
      <div className="detailsModal-buttonsDiv">
        <button
          className="detailsModal-buttonsNo"
          onClick={() => handleJobPost()}
        >
          No
        </button>
        <button
          className="detailsModal-buttonsYes"
          onClick={() => handleJobPost()}
        >
          Yes
        </button>
      </div>
    </div>
  );
};

export default JobDetailsModal;
