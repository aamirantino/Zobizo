import React from 'react';
import BreadCrumb from '../../../components/Common/BreadCrumb/BreadCrumb';
import JobsHeader from '../../../components/Common/JobsHeader/JobsHeader';
import FilterComponent from "../../../components/Common/FilterJobs/FilterJobs";
import AcceptedTable from "../../../components/Common/JobsTable/JobsTable";
import "./Openjobs.scss";
const Openjobs = () => {
  return (
    <div className='openjob-wrapper'>
      <JobsHeader title={"Open Jobs"}/>
      <BreadCrumb title={"Open Jobs"}/> 
      <FilterComponent title={"OPENJOBS"} professional={"TYPE OF OPENJOB"}/>
      <AcceptedTable/>
    </div>
  )
}

export default Openjobs