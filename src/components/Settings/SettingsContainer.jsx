import React, {useEffect} from 'react';
import Settings from './Settings';
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { HocRedirect } from '../../hoc/HocRedirect';
import Preloader from '../common/Preloader/Preloader'

const SettingsContainer = (props) => {

    useEffect(() => {
        // console.log(props.isMe);
        // console.log(props.myID);
        if (!props.isMe){
                props.getStatus(props.myID);
                props.getProfile(props.myID, true);                             
            }
            props.getStatus(props.myID);
    })
   
    if (!props.isMe) {
        return <Preloader />
      }

    return (
        <Settings {...props}
            profile={props.profile}
            userStatus={props.userStatus}
            updateStatus={props.updateStatus}
            savePhoto={props.savePhoto} 
            saveProfile={props.saveProfile}/>
    );
}

let mapStateToProps = (state) => ({ 
    myID: state.authPage.userId,
    isMe: state.profilePage.isMe,
    profile: state.profilePage.profile,
    userStatus: state.profilePage.userStatus
});

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    HocRedirect
)(SettingsContainer)