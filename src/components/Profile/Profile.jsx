import React from 'react';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import PostSettingContainer from './PostSetting/PostSettingContainer';

const Profile = React.memo((props) => {
    // console.log('RENDER Profile');
    return (
        <div className={style.profile}>
            <div className={style.profileWrapper}>
            <ProfileInfo profile={props.profile} 
            IsMe={props.IsMe}
            userStatus = {props.userStatus}
            updateStatus = {props.updateStatus}/>
            <PostSettingContainer />
            </div>            
      </div>
    );
});

export default Profile;