import { useEffect } from "react";
import { useState } from "react";
import { patchPostLikes } from "../Utils/api";

export default function CardPost(props) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(props.likes);
  }, []);

  const handleClick = () => {
    setLikes(likes + 1);
    patchPostLikes(props.key);
  };
  return (
    <div className="proj-imgbx">
      <img src={props.img} id="face" alt={props.caption} />
      <div className="bottom-half-card">
        <h4>{props.caption}</h4>
        <hr />
        <span>Created at: {props.createdAt}</span>
        <hr />
        <span>
          :+1: {likes}
          <button onClick={handleClick}>Like</button>
        </span>
      </div>
    </div>
  );
}
