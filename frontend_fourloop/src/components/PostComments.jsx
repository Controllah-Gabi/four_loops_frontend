import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getComments } from '../Utils/api'

export const PostComments = () => {
    const [comments, setComments] = useState([])
    const [loading,setLoading]=useState(true)
    const {post_id} = useParams()
    useEffect(()=>{
        getComments(post_id).then(commentData=>{
            setComments(commentData)
            setLoading(false)
        })
    })
  return loading? <h2>Loading</h2>:(
    comments.map((comment,index)=>{ 
    return (<div>
        <p>author: {comment.post_author[0].firstname}</p>
        <p> comment: {comment.body}</p>
        <p>votes :{comment.votes}</p>
        <p>created at: {comment.createdAt}</p>
    </div>)
    })
  )
}
