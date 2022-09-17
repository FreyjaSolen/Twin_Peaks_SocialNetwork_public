import React, { useEffect } from 'react';
import Header from './Header'
import { getUserInfo, outLogin } from './../../redux/authReducer'
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const HeaderContainer = (props) => {
   
    useEffect(() => {
        // console.log('Heder');
        props.getUserInfo();
    })

    const authChange = () => {
        if (props.isAuth) {
            props.outLogin();
        }
        else {
            <Navigate to={'/welcome'} />;
        }
    }

    return (
        <Header {...props} authChange={authChange} />
    );
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        login: state.authPage.login
    }
}

export default connect(mapStateToProps, { getUserInfo, outLogin })(HeaderContainer);