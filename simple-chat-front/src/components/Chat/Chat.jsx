import React, { useContext, useState, useEffect } from 'react';
import io from "socket.io-client";
// import socketIOClient from "socket.io-client";

import { useForm } from "react-hook-form";
import CreateRoom from '../Room/CreateRoom';
import Room from '../Room/Room';
import Message from '../Message/Message';
import { BiMailSend, BiExit } from "react-icons/bi";
import './Chat-Style.css'
import roomsMockData from "../../samples/roomsMockData.json"
import messagesMockData from "../../samples/messagesMockData.json"
import { userNameContext } from "../../utils/userNameContext";
import queryString from 'query-string';


const HOST = process.env.REACT_APP_STAGING_HOST;
const socket = io(HOST);

const Chat = ({ location }) => {
    const [currentRoom, setCurrentRoom] = useState("");
    const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [flag, setFlag] = useState(0)
    const { contextName } = useContext(userNameContext);
    const { handleSubmit, reset } = useForm({});

    const sendMessage = () => {
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    useEffect(() => {
        socket.emit('join', { username: contextName, room: currentRoom }, (error) => {
            if (error) {
                alert(error)
                setFlag(1);
            }
        })

    }, [currentRoom, contextName]);

    useEffect(() => {
        socket.on('message', message => {
            console.log(message)
            setMessages(messages => [...messages, message.text]);
        });

        socket.on("roomData", ({ users }) => {
            setUsers(users);
            console.log(users)
        });
    }, []);


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
                            {messages.map((message) => (
                                <Message
                                    message={message}


                                    // key={message.id}
                                    // content={message.content}
                                    imSender={contextName === users[1]?.username ? true : false}
                                >
                                </Message>
                            ))}
                        </div>
                        <div className='chat__bar'>
                            <form action="" className='chat__barform' onSubmit={handleSubmit(sendMessage)}>
                                <input className='chat__barinput' name="message" type="text" onChange={(e) => {
                                    setMessage(e.target.value)
                                }} />
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
                                console.log(currentRoom)
                                console.log(contextName)

                            }}>
                        </Room>
                    ))}
                </div>
            </div >
        </div >
    );
}

export default Chat;