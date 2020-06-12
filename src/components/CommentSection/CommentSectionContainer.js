// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [comment, setComment] = useState({text: "", username: "You"});

  function changeComment(message){
    setComment({
      ...comment,
      text: message
    });
  }

  function submitComment(e){
    e.preventDefault();
    setComments(comments.concat(comment));
    setComment({...comment, text: ""});
  }

  return (
    <div>
      {comments.map(comment => {
        return (
          <Comment comment={comment}/>
        );
      })}
      <CommentInput comment={comment.text} changeComment={changeComment} submitComment={submitComment}/>
    </div>
  );
};

export default CommentSection;
