import React, { useContext, useState } from 'react';
import CreateRoom from '../Room/CreateRoom';
import Room from '../Room/Room';
import Message from '../Message/Message';
import { BiMailSend, BiExit } from "react-icons/bi";
import './Chat-Style.css'
import roomsMockData from "../../samples/roomsMockData.json"
import messagesMockData from "../../samples/messagesMockData.json"
import {userNameContext} from "../../utils/userNameContext";

const Chat = () => {
    const [currentRoom, setCurrentRoom] = useState("");
    const {contextName} = useContext(userNameContext);

    return (
        <div className='chat'>
            <div className='chat__header'>
                {currentRoom !== "" ? (
                    <span className='chat__headertext'>Contact Name {contextName}</span>
                ) : null}
                {currentRoom !== "" ? (
                    <span className='chat__headertext chat__headertext--exit' onClick={() => setCurrentRoom("")}><BiExit />Exit Room</span>
                ) : null}
            </div>
            <div className='chat__body'>
                {currentRoom !== "" ? (
                    <div className='chat__left'>
                        <div className='chat__left--inner'>
                            {messagesMockData.map((message) => (
                                <Message
                                    key={message.id}
                                    content={message.content}
                                    imSender={message.imSender}
                                >
                                </Message>
                            ))}
                        </div>
                        <div className='chat__bar'>
                            <form action="" className='chat__barform'>
                                <input className='chat__barinput' type="text" />
                                <button className="chat__barbtn"><BiMailSend size="25" color="#FFF" /></button>
                            </form>
                        </div>
                    </div>

                ) :
                    (
                        <div className='chat__left'>
                            <span className='chat__left--title'>Select a room from the list to start chatting.</span>
                            <span className='chat__left--subtitle'>Simple Chat Application</span>
                        </div>
                    )}
                <div className='chat__right'>
                    <CreateRoom />
                    {roomsMockData.map((room) => (
                        <Room
                            key={room.RoomId}
                            isRoomSelected={room.RoomId === currentRoom}
                            roomId={room.RoomId}
                            onClick={() => {
                                setCurrentRoom(room.RoomId)
                            }}>
                        </Room>
                    ))}
                </div>
            </div >
        </div >
    );
}

export default Chat;