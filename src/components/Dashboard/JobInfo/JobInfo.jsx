import React from "react";
import "./JobInfo.scss";
function JobInfo({ data }) {
  return (
    <div className="frameParent">
      <div className="groupParent">
        <img className="frameChild" alt="" src={data.icon} />
        <div className="div">{data.total}</div>
      </div>
      <div className="completedJobsParent">
        <div className="div">{data.title}</div>
        <div className="loremIpsumDolor">{data.desc}</div>
      </div>
    </div>
  );
}

export default JobInfo;
