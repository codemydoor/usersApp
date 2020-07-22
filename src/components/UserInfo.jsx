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
      <button className="buttons" id="removeUser" onClick={handleClick}>
        Remove User
      </button>
      <button className="buttons" id="editUser">
        <Link id="link" to={`/edit/${id}`}>
          Edit User
        </Link>
      </button>
    </div>
  );
};

export default UserInfo;
