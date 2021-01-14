import React, { useContext, useState, useEffect } from 'react';
import io from "socket.io-client";
import { useForm } from "react-hook-form";
import CreateRoom from '../Room/CreateRoom';
import Room from '../Room/Room';
import Message from '../Message/Message';
import { BiMailSend, BiExit } from "react-icons/bi";
import './Chat-Style.css'
import roomsMockData from "../../samples/roomsMockData.json"
import { userNameContext } from "../../utils/userNameContext";
import { Redirect } from "react-router-dom"

const HOST = process.env.REACT_APP_STAGING_HOST;
const socket = io(HOST);

const Chat = () => {
    const [currentRoom, setCurrentRoom] = useState("");
    //TODO: Implement room active users list
    // const [users, setUsers] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const [errorFlag, setErrorFlag] = useState(0)
    const { contextName } = useContext(userNameContext);
    const { register, handleSubmit, reset } = useForm({});

    const sendMessage = (data) => {
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
            data.message = reset();
        }
    }

    const joinRoom = (roomId) => {
        setMessages([])
        socket.emit('join', { username: contextName, room: roomId }, (error) => {
            if (error) {
                alert(error)
                setErrorFlag(1);
            }
        })
    }

    const exitRoom = () => {
        setMessages([])
        setCurrentRoom("")
        socket.emit('disconnect');
    }

    useEffect(() => {
        socket.on('message', message => {
            setMessages((messages) => [...messages, message]);
        });

        //TODO: Implement room active users list
        // socket.on("roomData", ({ users }) => {
        //     console.log(users)
        //     setUsers(users);
        // });

    }, [contextName]);

    if (errorFlag) {
        return (
            <Redirect to="/" />
        )
    }

    return (
        <div className='chat'>
            <div className='chat__header'>
                {currentRoom !== "" ? (
                    <span className='chat__headertext'>Contact Name</span>
                ) : null}
                {currentRoom !== "" ? (
                    <span className='chat__headertext chat__headertext--exit' onClick={exitRoom}><BiExit />Exit Room</span>
                ) : null}
            </div>
            <div className='chat__body'>
                {currentRoom !== "" ? (
                    <div className='chat__left'>
                        <div className='chat__left--inner'>
                            {messages.map((message) => (
                                <Message
                                    message={message.text}
                                    createdAt={message.createdAt}
                                    userName={message.username}
                                    imSender={
                                        contextName.toLowerCase() === message.username ? true : false
                                    }
                                >
                                </Message>
                            ))}
                        </div>
                        <div className='chat__bar'>
                            <form action="" className='chat__barform' onSubmit={handleSubmit(sendMessage)}>
                                <input className='chat__barinput' ref={register} name="message" type="text" onChange={(e) => {
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
                                joinRoom(room.RoomId)
                            }}>
                        </Room>
                    ))}
                </div>
            </div >
        </div >
    );
}

export default Chat;