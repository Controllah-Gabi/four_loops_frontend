import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getComments } from '../Utils/api'
import { AddComment } from './AddComment'

export const PostComments = () => {
  const [comments, setComments] = useState([])
  const [loading,setLoading]=useState(true)
  const {post_id} = useParams()
  useEffect(()=>{
      getComments(post_id).then(commentData=>{
          setComments(commentData)
          setLoading(false)
      })
  },[post_id]);
  return loading? <h2>Loading</h2>:(
    <div>
      <AddComment comments={comments} setComments={setComments} />
      <div>
        {comments.map((comment)=>{ 
          return (<div key={comment._id} className="Comment">
              <p className='comment-author'>author: {comment.post_author[0].firstname}</p>
              <p className='comment-body'> comment: {comment.body}</p>
              <p className='comment-votes'>votes :{comment.votes}</p>
              <p className='comment-date'>created at: {comment.createdAt}</p>
          </div>)
          })}
      </div>
    </div>
  ) 
}
