import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCodes, getPosts } from "../Utils/api";
import CardCode from "./CardCode";
import CardPost from "./CardPost";

export default function Home() {
  const [postsData, setPostsData] = useState([]);
  const [codesData, setCodesData] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(true);
  const [isCodesLoading, setIsCodesLoading] = useState(true);

  useEffect(() => {
    getPosts()
      .then((data) => {
        setPostsData(data);
      })
      .then(() => {
        setIsPostsLoading(false);
      });
    getCodes()
      .then((data) => {
        setCodesData(data);
      })
      .then(() => {
        setIsCodesLoading(false);
      });
  }, []);

  return isCodesLoading || isPostsLoading ? (
    <div>Loading...</div>
  ) : (
    <main>
      {postsData.map((post) => {
        return (
          <Link to={`/posts/${post._id}`} key={post._id}><CardPost
            img={post.img}
            caption={post.caption}
            createdAt={post.createdAt}
            likes={post.likes}
          /></Link>
        );
      })}
      {codesData.map((code) => {
        return (
          <Link to={`/codes/${code._id}`} key={code._id}><CardCode
            title={code.title}
            code_body={code.code_body}
            description={code.description}
            createdAt={code.createdAt}
            likes={code.likes}
          /></Link>
        );
      })}
    </main>
  );
}
