import { useEffect } from "react";
import { useState } from "react";
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
          <CardPost
            key={post._id}
            img={post.img}
            caption={post.caption}
            createdAt={post.createdAt}
            likes={post.likes}
          />
        );
      })}
      {codesData.map((code) => {
        return (
          <CardCode
            key={code._id}
            title={code.title}
            code_body={code.code_body}
            description={code.description}
            createdAt={code.createdAt}
            likes={code.likes}
          />
        );
      })}
    </main>
  );
}
