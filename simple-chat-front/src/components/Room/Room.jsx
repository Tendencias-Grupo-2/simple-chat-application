import React from "react";
import "./Room-Style.css";

const Room = ({ Name, Picture, onClick, isRoomSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`room ${isRoomSelected ? "room--selected" : undefined}`}
    >
      <img className="room__img" src={Picture} alt="City" />
      <span className="room__name">{Name}</span>
    </div>
  );
};
export default Room;
