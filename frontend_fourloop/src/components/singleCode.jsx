import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getCodesById } from "../Utils/api";
import { patchCodeLikes } from "../Utils/api";

export default function SingleCode() {

  const [code, setCode] = useState({});
  const [loading, setLoading] = useState(true);
  const { code_id } = useParams();
  const [err, setErr] = useState(null);
  const [likes, setLikes] = useState(0)

  const handleClick = () => {
    setLikes(likes + 1);
    patchCodeLikes(code_id);
  };

  useEffect(() => {
    getCodesById(code_id).then(codeData => {
      setCode(codeData);
      setLoading(false);
      setLikes(codeData.likes);
    }).catch(err => {
      setErr(err.result);
    })
  }, [code_id])
  
  return err ? (<h2>{err}</h2>) : loading ? (<h2>Loading...</h2>) : (
    <div className="Single-code">
      <p className="code-title">{code.title}</p>
      <p className="code-description">{code.description}</p>
      <code className="code-body">{code.code_body}</code>
      <p className="code-createdAt">{code.createdAt}</p>
      <p className="code-author">{code.codeAuthor[0].firstname}</p>
      <button onClick={handleClick} className="code-likes">{likes} ❤️</button>
      <Link className="comment-link" to={`/codes/${code_id}/comments`}>
        comments
      </Link>
    </div>
  );
}
