import React from "react";
import BreadCrumb from "../../../components/Common/BreadCrumb/BreadCrumb";
import JobsHeader from "../../../components/Common/JobsHeader/JobsHeader";
import FilterComponent from "../../../components/Common/FilterJobs/FilterJobs";
import AcceptedTable from "../../../components/Common/JobsTable/JobsTable";
import "./Acceptedjobs.scss";
const Acceptedjobs = () => {
  return (
    <div className="acceptedjob-wrapper">
      <JobsHeader title={"Accepted Jobs"}/>
      <BreadCrumb title={"Accepted Jobs"}/>
      <FilterComponent
        title={"ACCEPTEDJOOBS"}
        professional={"TYPE OF ACCEPTED JOBS"}/>
      <AcceptedTable />
    </div>
  );
};

export default Acceptedjobs;
