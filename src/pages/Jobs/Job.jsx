import React from "react";
import { Outlet } from "react-router-dom";
import "./Job.scss";
function Job(props) {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default Job;
