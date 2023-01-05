import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCodes } from "../Utils/api";
import like from "../assets/love.png"

export default function Codes() {
  const [codesData, setcodesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCodes()
      .then((data) => {
        setcodesData(data);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (<h2>Loading...</h2>) : (
    <main>
      {codesData.map((code) => {
        return (
          <Link to={`/codes/${code._id}`} key={code._id}>
            <div className="card-code">
            <h2 className="code-title">{code.title}</h2>
            <div className="code-box">
            <p className="code-body">{code.code_body}</p>
            </div>
            <div className="desc">
            <span className="code-description">{code.description}</span>
            </div>
            <p className="code-likes">{code.likes}</p>
            <div className="likes">
            <button className="likes"><img src={like}></img></button>
            </div>
            <p className="code-createdAt">{code.createdAt}</p>
            <p className="code-author">{code.codeAuthor[0].firstname}</p>
            </div>
        </Link>
        );
      })}
    </main>
  );
}