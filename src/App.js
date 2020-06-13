/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";

// import the PostsPage and SearchBar and add them to the App
import SearchBar from "./components/SearchBar/SearchBarContainer";
import PostsPage from "./components/PostsContainer/PostsPage"

import data from "./dummy-data";

const App = () => {
  const [posts, setPosts] = useState(data);
  
  function search(e){
    e.preventDefault();
    const query = document.querySelector(".search-form input").value;
    setPosts(posts.filter(post=> post.username === query));
  }

  return (
    <div className="App">
      <SearchBar search={search}/>
      <PostsPage posts={posts}/>
    </div>
  );
};

export default App;
