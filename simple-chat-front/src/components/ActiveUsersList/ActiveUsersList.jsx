import React from "react";
import "./ActiveUsersList-Style.css";

const ActiveUsersList = ({ users }) => {
  return (
    <div>
      <span className="chat__users chat__users--bold">
        💬 Currently chatting:{" "}
      </span>
      {users &&
        users.map((user) => (
          <span className="chat__users" key={user.id}>
            {user.username},{" "}
          </span>
        ))}
    </div>
  );
};
export default ActiveUsersList;
