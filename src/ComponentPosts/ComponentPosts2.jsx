import React from "react";
import "./ComponentPosts.css";
import avatar from "../assets/Cat3.jpeg";
import comment from "../assets/icons8-comment-32.png"
import repost from "../assets/icons8-retweet-24.png"
import like from "../assets/icons8-favorite-30.png"
import stats from "../assets/icons8-statistics-48.png"

const Post2 = () => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={avatar} />
        <div>
          <span className="user-name">В качалке я</span>
          <span className="user-nick">@sportics</span>
          <span className="post-date"> · 5 фев.</span>
        </div>
      </div>
      <div className="post-text">
        Привет, мир! Сегодня отличный день для новых свершений! Кто с мной? 💪 #Мотивация #Спорт #День5
      </div>
      <div className="post-actions">
        <div className="post-action">
          <span className="post-icon"><img className="post-comment" src={comment}></img></span>
          <span>44 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-repost" src={repost}></img></span>
          <span>12 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-like" src={like}></img></span>
          <span>22 тыс.</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-stats" src={stats}></img></span>
          <span>105 тыс.</span>
        </div>
      </div>
    </div>
  );
};

export default Post2;