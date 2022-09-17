import React from 'react';
import style from './Post.module.css';
import avaIcon from '../../../../images/default.jpg';

const Post = (props) => {
    return (
        <div className={style.postContainer}>
        <div className={style.post}>
          <img src={avaIcon}/>
            {props.post}    
        </div>
      </div>
    );
}

export default Post;