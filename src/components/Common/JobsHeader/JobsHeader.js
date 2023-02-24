import React from 'react';
import Icon from "../../../asset/jobs/kanban.png";
import "./JobsHeader.scss";
const JobsHeader = ({icon, title}) => {
  console.log("titletitle",title);
  return (
    <div className='header-wrapper'>
      <img src={Icon}/>
      <h2>{title}</h2>
    </div>
  )
}

export default JobsHeader;