import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getPostById } from "../Utils/api";
import { patchPostLikes } from "../Utils/api";

export default function SinglePost() {

  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { post_id } = useParams();
  const [err, setErr] = useState(null);
  const [likes, setLikes] = useState(0)

  const handleClick = () => {
    setLikes(likes + 1);
    patchPostLikes(post_id);
  };

  useEffect(() => {
    getPostById(post_id).then(postData => {
      setPost(postData);
      setLoading(false);
      setLikes(postData.likes);
    }).catch(err => {
      setErr(err.result);
    })
  }, [post_id])
  
  return err ? (<h2>{err}</h2>) : loading ? (<h2>Loading...</h2>) : (
    <div className="Single-post">
      <img src={post.img} alt="Post img" className="img"/>
      <p className="post-caption">Caption: {post.caption}</p>
      <p className="post-date-created">createdAt: {post.createdAt}</p>
      <button onClick={handleClick} className="post-likes">{likes} ❤️</button>
      <Link className="comment-link" to={`/posts/${post_id}/comments`}>
        comments
      </Link>
    </div>
  );
}
