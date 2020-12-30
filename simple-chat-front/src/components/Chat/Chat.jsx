import React from 'react';
import './Chat-Style.css'

const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat__header'></div>
            <div className='chat__body'>
                <div className='chat__left'>
                    <span className='chat__left--title'>Select a room from the list to start chatting.</span>
                    <span className='chat__left--subtitle'>Simple Chat Application</span>
                </div>
                <div className='chat__right'>
                    contact list
                </div>
            </div>
        </div>
    );
}

export default Chat;