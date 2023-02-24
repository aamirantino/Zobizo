import React from "react";
import "./JobPost.scss";
function JobPost({ data }) {
  return (
    <div className="post-wrapper">
      <div className="post-container">
        <div className="post-top">
          <h3>{data.heading}</h3>
          <span>{data.date}</span>
        </div>
        <div className="post-bottom">
          <h3>{data.title}</h3>
          <p>{data.desc}</p>
          <a>View more...</a>
        </div>
      </div>
    </div>
  );
}

export default JobPost;
