import React from 'react';
import './Room-Style.css'
import { BiListPlus } from "react-icons/bi";

const CreateRoom = () => {
    return (
        <div className='room'>
            <BiListPlus size="40" color='#EB5600' />
            <span className='room__name'>Create Room</span>
        </div>
    );
}
export default CreateRoom;