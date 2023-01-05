import { useEffect } from "react";
import { useState } from "react";
import { patchCodeLikes } from "../Utils/api";

export default function CardCode(props) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(props.likes);
  }, []);

  const handleClick = () => {
    setLikes(likes + 1);
    patchCodeLikes(props.key);
  };
  return (
    <div className="proj-imgbx">
      <div className="bottom-half-card">
        <h4>{props.title}</h4>
        <hr />
        <div className="code-box">
        <span>{props.code_body}</span>
        </div>
        <hr />
        <span>{props.description}</span>
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
