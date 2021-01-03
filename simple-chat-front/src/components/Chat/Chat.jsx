import React, { useState } from 'react';
import CreateRoom from '../Room/CreateRoom';
import Room from '../Room/Room';
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


const Chat = () => {
    const [currentRoom, setCurrentRoom] = useState("");

    return (
        <div className='chat'>
            <div className='chat__header'>
                <span className='chat__headertext'>Contact Name</span>
                <span onClick={() => setCurrentRoom("")}>Exit Room</span>
            </div>
            <div className='chat__body'>
                {currentRoom === "" ? (
                    <div className='chat__left'>
                        <span></span>
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