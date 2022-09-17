import React, { useEffect } from 'react';
import Profile from './Profile';
import { getProfile, getStatus, updateStatus } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { compose } from 'redux';
import { HocRedirect } from '../../hoc/HocRedirect';

const ProfileContainer = (props) => {

    useEffect(() => {
        let userId = props.params.userId;
        let isMe = false;
        if (!userId) {
            if (props.isAuth) {
                userId = props.myID;
                isMe = true;
            }
        }
        props.getProfile(userId, isMe);
        props.getStatus(userId);
    }, [props.params.userId])

    return (
        <Profile {...props}
            IsMe={props.IsMe}
            profile={props.profile}
            userStatus={props.userStatus}
            updateStatus={props.updateStatus} />
    );
}

let mapStateToProps = (state) => ({
    IsMe: state.profilePage.isMe,
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus,
    isAuth: state.authPage.isAuth,
    myID: state.authPage.userId
});

const GetParams = (props) => {
    return <ProfileContainer {...props} params={useParams()} />
}

// export default compose(
//     connect(mapStateToProps, {getProfile, getStatus, updateStatus})
// )(GetParams)

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus}),
    HocRedirect
)(GetParams)