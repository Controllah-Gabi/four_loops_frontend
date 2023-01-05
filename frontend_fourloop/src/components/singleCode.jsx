import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getCodesById, patchCodeLikes } from "../Utils/api";

export default function CardCode(props) {
  const [code, setCode] = useState({});
  const [loading, setLoading] = useState(true);
  const { code_id } = useParams();
  const [err, setErr] = useState(null);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    setLikes(props.likes);
  }, []);

  const handleClick = () => {
    setLikes(likes + 1);
    patchCodeLikes(props.key);
  };

  useEffect(() => {
    getCodesById(code_id)
      .then((codeData) => {
        setCode(codeData);
        setLoading(false);
        setLikes(codeData.likes);
      })
      .catch((err) => {
        setErr(err.result);
      });
  }, [code_id]);

  return err ? (
    <h2>{err}</h2>
  ) : loading ? (
    <h2>Loading...</h2>
  ) : (
    <div className="Single-code">
      <p className="code-title">{code.title}</p>
      <p className="code-description">{code.description}</p>
      <code className="code-body">{code.code_body}</code>
      <p className="code-createdAt">{code.createdAt}</p>
      <p className="code-author">{code.codeAuthor[0].firstname}</p>
      <button onClick={handleClick} className="code-likes">
        {likes} ❤️
      </button>
      <Link className="comment-link" to={`/codes/${code_id}/comments`}>
        comments
      </Link>
    </div>
  );

  // return (
  //   <div className="proj-imgbx">
  //     <div className="bottom-half-card">
  //       <h4>{props.title}</h4>
  //       <hr />
  //       <div className="code-box">
  //       <span>{props.code_body}</span>
  //       </div>
  //       <hr />
  //       <span>{props.description}</span>
  //       <hr />
  //       <span>Created at: {props.createdAt}</span>
  //       <hr />
  //       <span>
  //         :+1: {likes}
  //         <button onClick={handleClick}>Like</button>
  //       </span>
  //     </div>
  //   </div>
  // );
}
