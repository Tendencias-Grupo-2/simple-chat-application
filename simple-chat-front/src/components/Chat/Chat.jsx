import React, { useState } from 'react';
import CreateRoom from '../Room/CreateRoom';
import Room from '../Room/Room';
import Message from '../Message/Message';
import { BiMailSend, BiExit } from "react-icons/bi";

import './Chat-Style.css'

let roomsMockData = [
    {
        "RoomId": "1",
    },
    {
        "RoomId": "2",
    },
    {
        "RoomId": "3",
    },
    {
        "RoomId": "4",
    },
    {
        "RoomId": "5",
    },
    {
        "RoomId": "6",
    },
    {
        "RoomId": "7",
    },
    {
        "RoomId": "8",
    },
]


let messagesMockData = [
    {
        "id": "1",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione maxime tenetur ullam quis error impedit exercitationem dicta suscipit, voluptatibus dolore!",
        "imSender": true
    },
    {
        "id": "2",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias vitae veniam deleniti repellendus ab iusto neque nobis aliquid quasi unde repellat accusantium ducimus, iure modi ea, placeat quas similique eligendi sequi facere? Odio sint earum assumenda. Modi tempora qui totam asperiores eius autem, aperiam id minus ducimus facilis accusantium quaerat!",
        "imSender": false
    },
    {
        "id": "3",
        "content": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, error!",
        "imSender": false
    },
    {
        "id": "4",
        "content": "Lorem ipsum dolor sit amet.",
        "imSender": true
    },
    {
        "id": "5",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio est aut culpa inventore cum animi cupiditate officia unde eveniet sed?",
        "imSender": true
    },
    {
        "id": "6",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio est aut culpa inventore cum animi cupiditate officia unde eveniet sed?",
        "imSender": true
    },
    {
        "id": "7",
        "content": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio est aut culpa inventore cum animi cupiditate officia unde eveniet sed?",
        "imSender": false
    }

]


const Chat = () => {
    const [currentRoom, setCurrentRoom] = useState("");

    return (
        <div className='chat'>
            <div className='chat__header'>
                {currentRoom !== "" ? (
                    <span className='chat__headertext'>Contact Name</span>
                ) : (
                        ""
                    )}
                {currentRoom !== "" ? (
                    <span className='chat__headertext chat__headertext--exit' onClick={() => setCurrentRoom("")}><BiExit />Exit Room</span>
                ) : (
                        ""
                    )}
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