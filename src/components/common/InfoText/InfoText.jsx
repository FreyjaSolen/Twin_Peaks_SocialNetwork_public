import React from 'react';
import style from './InfoText.module.css';

const InfoText = ({conTitle, conValue}) => {

    return (
        <div className={style.wrapper}>
        <div className={style.description}>
            <b>{conTitle}</b>: 
        </div>
        <div className={style.description}>
            {conValue}
        </div>
        </div>
    );
}

export default InfoText;