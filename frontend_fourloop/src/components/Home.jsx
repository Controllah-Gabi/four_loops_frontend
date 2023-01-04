import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCodes, getPosts } from "../Utils/api";
import CardCode from "./CardCode";
import CardPost from "./CardPost";

export default function Home() {
  const [postsData, setPostsData] = useState([]);

  const [isPostsLoading, setIsPostsLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPostsData(data);
      })
      .then(() => {
        setIsPostsLoading(false);
      });
  }, []);

  return isPostsLoading ? (
    <div>Loading...</div>
  ) : (
    <main>
      {postsData.map((post) => {
        return (
          <Link to={`/posts/${post._id}`} key={post._id}>
            <CardPost
              img={post.img}
              caption={post.caption}
              createdAt={post.createdAt}
              likes={post.likes}
            />
          </Link>
        );
      })}
    </main>
  );
}
