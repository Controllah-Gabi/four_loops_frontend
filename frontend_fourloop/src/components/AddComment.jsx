import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';
import { postComment } from '../Utils/api';

export const AddComment = ({comments,setComments}) => {
    
  const [commentBody, setCommentBody] = useState("");
  console.log(commentBody)
  const {post_id} = useParams()
  const [err,setErr] = useState(null)
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
                })
                setCommentBody("")
            })
            postComment(commentBody,post_id).catch((err,commentFromAPI)=>{
                setComments(currentComment=>{
                    const newComments = [...currentComment]
                    newComments.shift(commentFromAPI)
                    return newComments
                })
                setCommentBody("")
                setErr("Something went wrong try again")
            })

        }
        
        // console.log(e.target[0].value);
        // setCommentData([
        //   ...commentData,
        //   { body: e.target[0].value, date: new Date().toString(), votes: 0 },
        // ]);
      };
  return err? <p>{err}</p>:(
    <div>
        <form className="comment-form" id="comment-form" onSubmit={handleSubmit}>
        <textarea
          name="comment-text"
          placeholder='comment'
          id="comment-text"
          cols="30"
          rows="3"
          value={commentBody}
          onChange={e=>{setCommentBody(e.target.value)}} 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
