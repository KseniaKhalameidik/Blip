import React from "react";
import "./ComponentPosts.css";
import avatar from "../assets/Cat1.jpeg";
import comment from "../assets/icons8-comment-32.png"
import repost from "../assets/icons8-retweet-24.png"
import like from "../assets/icons8-favorite-30.png"
import stats from "../assets/icons8-statistics-48.png"

const Post = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} />
        <div>
          <span className="user-name">О, тут камера</span>
          <span className="user-nick">@CameraMan</span>
          <span className="post-date"> · 29 июн.</span>
        </div>
      </div>
      <div className="post-text">
        Сегодня снова попал в объектив. Надеюсь, получился фотогенично
      </div>
      <div className="post-actions">
        <div className="post-action">
          <span className="post-icon"><img className="post-comment" src={comment}></img></span>
          <span>11 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-repost" src={repost}></img></span>
          <span>4 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-like" src={like}></img></span>
          <span>1 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-stats" src={stats}></img></span>
          <span>124 тыс.</span>
        </div>
      </div>
    </div>
  );
};

export default Post;