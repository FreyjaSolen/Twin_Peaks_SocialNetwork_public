import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './MsrActor.module.css';
import avaIcon from '../../../images/default.jpg';

const MsrActor = (props) =>{

    let path = '/messenger/' + props.id; 
    let wrap = navData => navData.isActive?style.active:style.dialogActor;

    return(
        <div className={style.actorWrapper}>
            <NavLink to={path} className={wrap}>
            <img src={avaIcon}/>
            {props.name}
            </NavLink>
        </div>
    );
}

export default MsrActor