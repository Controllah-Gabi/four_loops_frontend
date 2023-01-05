import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getCodes } from "../Utils/api";

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
            <p className="code-title">{code.title}</p>
            <p className="code-description">{code.description}</p>
            <p className="code-body">{code.code_body}</p>
            <p className="code-likes">{code.likes}</p>
            <p className="code-createdAt">{code.createdAt}</p>
            <p className="code-author">{code.codeAuthor[0].firstname}</p>
        </Link>
        );
      })}
    </main>
  );
}