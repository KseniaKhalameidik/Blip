import React from "react";
import "./ComponentPosts.css";
import avatar from "../assets/Cat1.jpeg";
import comment from "../assets/icons8-comment-32.png"
import repost from "../assets/icons8-retweet-24.png"
import like from "../assets/icons8-favorite-30.png"
import stats from "../assets/icons8-statistics-48.png"

const Post = (props) => {
  return (
    <div className="post">
      <div className="post-header">
        <img className="post-avatar" src={props.avatar} />
        <div>
          <span className="user-name">{props.userName}</span>
          <span className="user-nick">{props.userNick}</span>
          <span className="post-dot"> · </span>
          <span className="post-date">{props.postDate}</span>
        </div>
      </div>
      <div className="post-text">{props.postText}</div>
      <div className="post-actions">
        <div className="post-action">
          <span className="post-icon"><img className="post-comment" src={comment}></img></span>
          <span>{props.commentCount}</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-repost" src={repost}></img></span>
          <span>{props.repostCount}</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-like" src={like}></img></span>
          <span>{props.likeCount}</span>
        </div>
        <div className="post-action">
          <span className="post-icon"><img className="post-stats" src={stats}></img></span>
          <span>{props.statsCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
