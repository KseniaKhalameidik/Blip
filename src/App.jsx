import { useState } from 'react';
import './App.css';
import Icon from './ComponentIcon/ComponentIcon';
import User from './ComponentUser/ComponentUser';
import Compilation from './ComponentCompilation/ComponentCompilation';
import UserPost from './ComponentUserPost/ComponentUserPost';
import Post from './ComponentPosts/ComponentPosts';
import Post1 from './ComponentPosts/ComponentPosts1';
import Post2 from './ComponentPosts/ComponentPosts2';


function App() {
  return (
    <main>
      <Icon />
      <User />
      <Compilation />
      <UserPost />
      <Post />
      <Post1 />
      <Post2 />
    </main>
  )
}

export default App
