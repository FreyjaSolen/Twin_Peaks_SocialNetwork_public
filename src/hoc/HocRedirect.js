import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

let mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth
});

export const HocRedirect = (Component) => {

    const RedirectComponent = (props) =>{
        if (!props.isAuth) {
                        return <Navigate to={'/welcome'} />;
                    }
                    else {
                        return (
                            <Component {...props} />
                        )
                    }
    }

    let ConnectRedirectComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectRedirectComponent;
}