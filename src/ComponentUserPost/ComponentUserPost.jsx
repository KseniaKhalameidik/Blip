import React from 'react';
import UserLogo from '../assets/icons8-profile-50.png'
import UserLogo1 from '../assets/icons8-пользователь-мужчина-в-кружке-50.png'
import './ComponentUserPost.css';

const UserPost = (props) => {
  return (
    <div className='post'>
      <div className="user-post">
          <img className="avatar" src={props.avatar} />
          <form className='postbox'>
              <input className='post-input' placeholder='Что нового?'></input>
          </form>
      </div>
      <div className="post-footer">
          <button className="post-button">Опубликовать пост</button>
      </div>
    </div>
  );
};

export default UserPost;
