//Complete the necessary code in this file
// import useState
import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import postsData from "../../dummy-data";

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(postsData);
  return (
    <div className="posts-container-wrapper">
      {posts.map(post=>{
        return(
          <Post post={post}/>
        )
      })}
    </div>
  );
};

export default PostsPage;
