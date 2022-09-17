import React from 'react';
import { addPostActionCreator } from '../../../redux/profileReducer';
import PostSetting from './PostSetting';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
      profilePage: state.profilePage,
      newPostText: state.profilePage.newPostText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
      addPost: (newPost) => {dispatch(addPostActionCreator(newPost))}
      // updateNewPostText: (text) => {dispatch(updatePostTextActionCreator(text))}
  }
}

const PostSettingContainer = connect(mapStateToProps, mapDispatchToProps)(PostSetting);


export default PostSettingContainer;