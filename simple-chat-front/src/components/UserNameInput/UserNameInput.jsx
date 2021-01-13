import React, { useState, useContext } from 'react';
import './UserNameInput-Style.css'
import { userNameContext } from "../../utils/userNameContext";
import { Link } from "react-router-dom";

const UserNameInput = () => {
    const [userJoined, setUserJoined] = useState(false);
    const [userName, setUserName] = useState('');
    const { setContextName } = useContext(userNameContext);

    const joinAction = () => {
        setUserJoined(true)
        setContextName(userName)
    }

    const clearAction = () => {
        setUserName('')
        setContextName('')
        setUserJoined(false)
    }

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
                <input type="text" className="userinput__forminput" value={userName} onChange={(e) => {
                    setUserName(e.target.value)
                    setContextName(e.target.value)
                }} />
            </form>
            <div className="userinput__action">
                <Link
                    className="userinput__btn userinput__btn--join"
                    onClick={
                        event => (!userName) ? event.preventDefault() : joinAction()
                    } to={`/chat`}>
                    Join
                </Link>
                <button className="userinput__btn userinput__btn--clear" onClick={() => { clearAction() }}>Clear</button>
            </div>
        </div>
    );
}

export default UserNameInput;