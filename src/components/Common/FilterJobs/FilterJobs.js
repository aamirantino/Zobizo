import React from 'react'
import FilterDropDown from "../DropDown/DropDown";
import FilterIcon from "../../../asset/jobs/filter.svg";
import "./FilterJobs.scss"
const FilterJobs = ({title, professional}) => {
  return (
    <div className='filter-wrapper'>
      <FilterDropDown title={title}/>
      <FilterDropDown title={professional}/>
      <div className='filter-icon'>
      <img src={FilterIcon}/>

      </div>
    </div>
  )
}

export default FilterJobs