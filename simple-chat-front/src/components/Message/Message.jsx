import React from 'react';
import './Message-Style.css'


const Message = ({ message, imSender, createdAt, userName }) => {
    console.log(imSender)
    return (
        <div className="message__wrapper">
            <span className="message__sender">{userName}</span>
            <div className={`message ${imSender === true ? "message--me" : null}`}>
                <span className='message__text'>{message}</span>
                <span className='message__time'>{createdAt}</span>
            </div>
        </div>
    );
}
export default Message;