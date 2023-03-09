import React from "react";

function SingleComment(props) {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="profile" src={props.profile} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.name}
        </a>
        <div className="metadata">
          <span className="data">Today at {props.time}</span>
        </div>
        <div className="text">{props.message}</div>
      </div>
    </div>
  );
}

export default SingleComment;
