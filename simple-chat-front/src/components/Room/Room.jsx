import React from 'react';
import './Room-Style.css'

const Room = ({ roomId, onClick, isRoomSelected }) => {
    return (
        <div onClick={onClick} className={`room ${isRoomSelected ? "room--selected" : undefined}`} >
            <img className='room__img' src="http://placecorgi.com/75/75" alt="Corgi" />
            {/* TODO: Change room name mock to generated one once backend is integrated */}
            <span className='room__name'>Room #{roomId}</span>
        </div>
    );
}
export default Room;