import React from 'react';
import UserLogo from '../assets/icons8-profile-50.png'
import UserLogo1 from '../assets/icons8-пользователь-мужчина-в-кружке-50.png'
import './ComponentUser.css';

const User = () => {
  return (
    <div className="user-profile">
        <img className="logo" src={UserLogo1} />
        <div className='names-container'>
          <span className='user-name'>user</span>
          <span className='user-nick'>@user</span>
        </div>
    </div>
  );
};

export default User;
