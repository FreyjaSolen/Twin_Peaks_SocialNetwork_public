import React from 'react';
import style from './Enter.module.css';
import headerImage from '../../images/heat.jpg';
import { connect } from 'react-redux';
import {checkLogin} from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import Login from './Login';

const Enter = (props) => {

    if (props.isAuth)
    {
        return <Navigate to={'/profile'} />;
    }
    return (
        <div className={style.enterWrapper}>
            <div>
                <img src={headerImage} className={style.mainImage} />
            </div>
            <div className={style.greetings}>
                <h1>Welcome to Twin Peaks!</h1>
            </div>
            <Login checkLogin = {props.checkLogin}/>
        </div>
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth
    }
}

export default connect(mapStateToProps, {checkLogin})(Enter);