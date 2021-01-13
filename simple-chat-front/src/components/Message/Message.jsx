import React from 'react';
import './Message-Style.css'


const Message = (message, imSender) => {
    console.log(imSender)
    return (
        // <div className="message">
        <div className={`message ${imSender === true ? "message--me" : null}`}>
            <span className='message__text'>{message.message}</span>
            <span className='message__time'>8:00</span>
        </div>
    );
}
export default Message;