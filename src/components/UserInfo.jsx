import React from "react";
import "../css/userinfo.css";
import { Link } from "react-router-dom";

const UserInfo = ({ name, email, gen, id, removeUser }) => {
  const handleClick = () => {
    removeUser(id);
  };
  return (
    <div className="userInfo">
      <h3>Name:{name}</h3>
      <p>Email:{email}</p>
      <h3>Gen{gen}</h3>
      <button onClick={handleClick}>Remove User</button>
      <Link to={`/edit/${id}`}>Edit User</Link>
    </div>
  );
};

export default UserInfo;
