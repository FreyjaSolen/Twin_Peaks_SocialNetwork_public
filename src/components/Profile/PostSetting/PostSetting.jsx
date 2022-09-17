import React from 'react';
import style from './PostSetting.module.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

const PostSetting = (props) => {

  // console.log('RENDER PostSetting');
  // console.log(props);

  let state = props.profilePage;
  let mapPostMsg = state.postMessages.map(txtPost => ( <div key={txtPost.id}> 
    <Post post={txtPost.post} />
    </div>
  ));
  //правильный, не изменяющий массив в state реверс
  // let mapPostMsg = state.postMessages.map(txtPost => (
  //   <Post post={txtPost.post} />
  // )).reverse();

  return (
    <div className={style.postSettingContainer}>
      <div>
        <PostForm addPost={props.addPost}/>
      </div>
      <div>
        {mapPostMsg}
      </div>
    </div>
  );
}

export default PostSetting;