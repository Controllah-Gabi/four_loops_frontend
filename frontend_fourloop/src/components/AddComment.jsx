import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import { postComment } from '../Utils/api';

export const AddComment = ({comments,setComments}) => {
    
  const [commentBody, setCommentBody] = useState("");
  const {post_id} = useParams()
  const [err,setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(commentBody === ""){
        alert("add text to field")
    }else{
        postComment(commentBody,post_id).then((commentFromAPI)=>{
            setComments(currentComment=>{
              const newComments = [...currentComment]
              newComments.unshift(commentFromAPI)
              return newComments
            });
            setCommentBody("")
        }).catch(err => {
          setCommentBody("")
          setErr("Something went wrong try again")
        })
    }
  };
  return err? <p>{err}</p>:(
    <div>
        <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          className='comment-input'
          placeholder='Type a comment here'
          cols="50"
          rows="3"
          value={commentBody}
          onChange={e=>{setCommentBody(e.target.value)}} 
        ></textarea>
        <button className='comment-input-btn' type="submit">Submit</button>
      </form>
    </div>
  )
}
