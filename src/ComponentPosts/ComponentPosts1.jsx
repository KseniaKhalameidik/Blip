import React from "react";
import "./ComponentPosts.css";
import avatar from "../assets/Cat2.jpeg";
import comment from "../assets/icons8-comment-32.png"
import repost from "../assets/icons8-retweet-24.png"
import like from "../assets/icons8-favorite-30.png"
import stats from "../assets/icons8-statistics-48.png"

const Post1 = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} />
        <div>
          <span className="user-name">Ооо нееет, мой дом</span>
          <span className="user-nick">@fire_cat</span>
          <span className="post-date"> · 27 апр.</span>
        </div>
      </div>
      <div className="post-text">
        Ooo Heeer, мой дом sweet home! 🏡💖 Тут, под крышей @fire_cat, я творю магию каждый день... а точнее, с 27 апреля! 😹🔥 Кто готов разделить со мной этот адский (в хорошем смысле) уют? #КотоВамп #ДомМоейМечты #ОгненныйМур
      </div>
      <div className="post-actions">
        <div className="post-action">
          <span className="post-icon"><img className="post-comment" src={comment}></img></span>
          <span>75 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-repost" src={repost}></img></span>
          <span>2 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-like" src={like}></img></span>
          <span>5 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-stats" src={stats}></img></span>
          <span>85 тыс.</span>
        </div>
      </div>
    </div>
  );
};

export default Post1;