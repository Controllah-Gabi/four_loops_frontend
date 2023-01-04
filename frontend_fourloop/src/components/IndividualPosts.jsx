import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router'
import { getPostById, patchPostLikes } from '../Utils/api'


export const IndividualPosts = () => {
    const {post_id} = useParams()
    const [loading,setLoading]=useState(true)
    const [post,setPost] = useState({})
    const [likes,setLikes]=useState(0)

    const handleClick = () => {
        setLikes(likes + 1);
        patchPostLikes(post_id);
      };
    useEffect(()=>{
        
        getPostById(post_id).then((postData)=>{
            setPost(postData)
            setLoading(false)
        })
    },[post_id])
  return loading? <h2>Loading</h2>: (
    <div>
        <div className="proj-imgbx">
      <img src={post.img} id="face" alt={post.caption} />
      <div className="bottom-half-card">
        <h4>{post.caption}</h4>
        <hr />
        <span>Created at: {post.createdAt}</span>
        <hr />
        <span>
          :+1: {post.likes}
          <button onClick={handleClick}>Like</button>
        </span>
      </div>
    </div>
    </div>
  )
}
