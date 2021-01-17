import React, { useContext, useState, useEffect } from "react";
import io from "socket.io-client";
import { useForm } from "react-hook-form";
import Room from "../Room/Room";
import Message from "../Message/Message";
import { BiMailSend, BiExit } from "react-icons/bi";
import "./Chat-Style.css";
import roomsInfo from "../../samples/roomsInfo.json";
import { userNameContext } from "../../utils/userNameContext";
import { Redirect } from "react-router-dom";
import ActiveUsersList from "../ActiveUsersList/ActiveUsersList";
import ScrollToBottom from "react-scroll-to-bottom";

const HOST = process.env.REACT_APP_STAGING_HOST;
const socket = io(HOST);

const Chat = () => {
  const [currentRoom, setCurrentRoom] = useState("");
  const [roomName, setRoomName] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [errorFlag, setErrorFlag] = useState(0);
  const { contextName } = useContext(userNameContext);
  const { register, handleSubmit, reset } = useForm({});

  /* istanbul ignore next */
  const sendMessage = (data) => {
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
      data.message = reset();
    }
  };

  /* istanbul ignore next */
  const joinRoom = (roomId) => {
    setMessages([]);
    socket.emit("join", { username: contextName, room: roomId }, (error) => {
      if (error) {
        alert(error);
        setErrorFlag(1);
      }
    });
  };

  const exitRoom = () => {
    setMessages([]);
    setCurrentRoom("");
    socket.emit("exitRoom", currentRoom);
  };

  /* istanbul ignore next */
  const switchRoom = (currentRoom, newRoom) => {
    socket.emit("exitRoom", currentRoom);
    setMessages([]);
    joinRoom(newRoom);
    setCurrentRoom(newRoom);
  };

  /* istanbul ignore next */
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [contextName]);

  if (errorFlag) {
    return <Redirect to="/" />;
  }

  return (
    <div className="chat">
      <div className="chat__header">
        {currentRoom !== "" ? (
          <span className="chat__headertext">{roomName} Chatting Room</span>
        ) : null}
        {currentRoom !== "" ? (
          <span
            className="chat__headertext chat__headertext--exit"
            onClick={exitRoom}
          >
            <BiExit />
            Exit Room
          </span>
        ) : null}
      </div>
      <div className="chat__body">
        {currentRoom !== "" ? (
          <div className="chat__left">
            <ScrollToBottom mode="bottom" className="chat__messagecontainer">
              <div className="chat__left--inner">
                {messages.map((message) => (
                  <Message
                    key={message.createdAt}
                    message={message.text}
                    createdAt={message.createdAt}
                    userName={message.username}
                    imSender={
                      contextName.toLowerCase() === message.username
                        ? true
                        : false
                    }
                    isInfoMessage={
                      message.username === "ChatApp" ? true : false
                    }
                  ></Message>
                ))}
              </div>
            </ScrollToBottom>
            <div>
              {users ? <ActiveUsersList users={users} /> : null}
              <div className="chat__bar">
                <form
                  autoComplete="off"
                  className="chat__barform"
                  onSubmit={handleSubmit(sendMessage)}
                >
                  <input
                    className="chat__barinput"
                    ref={register}
                    name="message"
                    type="text"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                  <button className="chat__barbtn">
                    <BiMailSend size="25" color="#FFF" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="chat__left">
            <span className="chat__left--title">
              Select a room from the list to start chatting.
            </span>
            <span className="chat__left--subtitle">
              Simple Chat Application
            </span>
          </div>
        )}
        <div className="chat__right">
          {roomsInfo.map((room) => (
            <Room
              key={room.Id}
              isRoomSelected={room.Id === currentRoom}
              Id={room.Id}
              Picture={room.Picture}
              Name={room.Name}
              onClick={() => {
                setCurrentRoom(room.Id);
                setRoomName(room.Name);
                currentRoom === ""
                  ? joinRoom(room.Id)
                  : switchRoom(currentRoom, room.Id);
              }}
            ></Room>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chat;
