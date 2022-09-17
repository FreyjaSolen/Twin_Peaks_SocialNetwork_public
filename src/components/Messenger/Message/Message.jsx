import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Message.module.css';

const Message = (props) => {
    // console.log('RENDER Message');
    // console.log(props);
    return (
        <div className={style.dialogsItem}>
            <div>
                {props.message}
            </div>
        </div>
    );
}

export default Message;