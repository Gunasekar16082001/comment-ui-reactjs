import React from "react";

const UserCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">
        <a className="header">User Details</a>

        <div className="description">
        {props.children} </div>
      </div>
      <div className="ui bottom button">
        <i className="add icon"></i>Add Frd
      </div>
    </div>
  );
};

export default UserCard;
