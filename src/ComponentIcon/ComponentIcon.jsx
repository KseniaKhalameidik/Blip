import React from 'react';
import logo1 from '../assets/fluid-speech-bubble.png';
import logo2 from '../assets/fluid-letter-b.png';
import './ComponentIcon.css';

const Icon = () => {
  return (
    <div className="logo-container">
        <img className="logo" src={logo2} />
        <img className="logo" src={logo1} />
    </div>
  );
};

export default Icon;