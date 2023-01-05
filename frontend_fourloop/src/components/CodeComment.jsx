import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { getCommentsCode } from "../Utils/api";

export const CodeComment = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { code_id } = useParams();
  useEffect(() => {
    getCommentsCode(code_id).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  });
  return loading ? (
    <h2>Loading</h2>
  ) : (
    comments.map((comment, index) => {
      return (
        <div className="Comment">
          <p className="comment-author">
            author: {comment.comment_author[0].firstname}
          </p>
          <p className="comment-body"> comment: {comment.body}</p>
          <p className="comment-votes">votes :{comment.votes}</p>
          <p className="comment-date">created at: {comment.createdAt}</p>
        </div>
      );
    })
  );
};
