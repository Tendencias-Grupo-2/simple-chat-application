import React, { useState } from 'react';
import './UserNameInput-Style.css'

const UserNameInput = () => {
    const [userJoined, setUserJoined] = useState(false);
    const [userName, setUserName] = useState('');

    return (
        <div className="userinput">
            <div className="userinput__debug">
                <span>User: </span>
                <span className="userinput__username">{userName}</span>
                <span>Joined: </span>
                <span className="userinput__userjoined">{String(userJoined)}</span>
            </div>
            <span className="userinput__title">Give us your username!</span>
            <form action="" className="userinput__form">
                <input type="text" className="userinput__forminput" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            </form>
            <div className="userinput__action">
                <button className="userinput__btn userinput__btn--join" onClick={() => { setUserJoined(true) }}>Join</button>
                <button className="userinput__btn userinput__btn--clear" onClick={() => {
                    setUserName('')
                    setUserJoined(false)
                }}>Clear</button>
            </div>
        </div>
    );
}

export default UserNameInput;