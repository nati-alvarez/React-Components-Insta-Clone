//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";

const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {props.posts.map(post=>{
        return(
          <Post post={post}/>
        )
      })}
    </div>
  );
};

export default PostsPage;
