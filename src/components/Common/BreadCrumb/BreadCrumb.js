import React from 'react'
import "./BreadCrumb.scss";
import Arrow from "../../../asset/jobs/Vector.svg"
const BreadCrumb = ({title}) => {
  return (
    <div className='breadCrumb-container'>
      <p>Gig Jobs</p>
      <img src={Arrow}/>
      <h3>{title}</h3>
    </div>
  )
}

export default BreadCrumb