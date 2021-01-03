import React from 'react';
import './Message-Style.css'


const Message = ({ content, imSender }) => {
    return (
        <div className={`message ${imSender === true ? "message--me" : null}`}>
            <span className='message__text'>{content}</span>
        </div>
    );
}
export default Message;