import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../Utils/api";

export default function Posts() {
  const [postsData, setPostsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPostsData(data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <h2>Loading...</h2>
  ) : (
    <main className="Post-page">
      {postsData.map((post) => {
        return (
          <Link to={`/posts/${post._id}`} key={post._id} className="Post">
            <img src={post.img} alt="Post img" className="img"/>
            <p className="post-caption">Caption: {post.caption}</p>
            <p className="post-date-created">createdAt: {post.createdAt}</p>
            <p className="post-likes">likes: {post.likes}</p>
          </Link>
        );
      })}
    </main>
  );
}
