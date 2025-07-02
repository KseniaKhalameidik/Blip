import { useState } from 'react';
import './App.css';
import avatar1 from "./assets/Cat1.jpeg";
import avatar2 from "./assets/Cat2.jpeg";
import avatar3 from "./assets/Cat3.jpeg";
import UserLogo1 from './assets/icons8-пользователь-мужчина-в-кружке-50.png'
import Icon from './ComponentIcon/ComponentIcon';
import User from './ComponentUser/ComponentUser';
import UserPost from './ComponentUserPost/ComponentUserPost';
import Post from './ComponentPosts/ComponentPosts';


function App() {
  return (
    <main>
      <Icon />
      <User />
      <UserPost avatar={UserLogo1}/>
      <Post 
      avatar={avatar1} 
      userName="О, тут камера" 
      userNick="@CameraMan" 
      postDate="29 июн." 
      postText="Сегодня снова попал в объектив. Надеюсь, получился фотогенично" 
      commentCount="11 тыс." 
      repostCount="4 тыс." 
      likeCount="1 тыс." 
      statsCount="124 тыс."/>
      <Post 
      avatar={avatar2} 
      userName="Ооо нееет, мой дом" 
      userNick="@fire_cat" 
      postDate="27 апр." 
      postText="Ooo Heeer, мой дом sweet home! 🏡💖 Тут, под крышей @fire_cat, я творю магию каждый день... а точнее, с 27 апреля! 😹🔥 Кто готов разделить со мной этот адский (в хорошем смысле) уют? #КотоВамп #ДомМоейМечты #ОгненныйМур" 
      commentCount="75 тыс." 
      repostCount="2 тыс." 
      likeCount="5 тыс." 
      statsCount="85 тыс."/>
      <Post 
      avatar={avatar3} 
      userName="В качалке я" 
      userNick="@sportics" 
      postDate="5 фев." 
      postText="Привет, мир! Сегодня отличный день для новых свершений! Кто с мной? 💪 #Мотивация #Спорт #День5" 
      commentCount="44 тыс." 
      repostCount="12 тыс." 
      likeCount="22 тыс." 
      statsCount="105 тыс."/>
    </main>
  )
}

export default App
