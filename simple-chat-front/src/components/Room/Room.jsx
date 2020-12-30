import React from 'react';
import './Room-Style.css'

const Room = ({ roomId }) => {
    return (
        <div className='room'>
            <img className='room__img' src="http://placecorgi.com/75/75" alt="Corgi" />
            <span className='room__name'>Room #{roomId}</span>
        </div>
    );
}
export default Room;