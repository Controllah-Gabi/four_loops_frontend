import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCodes } from "../Utils/api";
import CardCode from "./CardCode";

export default function Code() {
  const [codesData, setCodesData] = useState([]);
  const [isCodesLoading, setIsCodesLoading] = useState(true);

  useEffect(() => {
    getCodes()
      .then((data) => {
        setCodesData(data);
      })
      .then(() => {
        setIsCodesLoading(false);
      });
  }, []);

  return isCodesLoading ? (
    <div>Loading...</div>
  ) : (
    <main>
      {codesData.map((code) => {
        return (
          <Link to={`/codes/${code._id}`} key={code._id}>
            <CardCode
              title={code.title}
              code_body={code.code_body}
              description={code.description}
              createdAt={code.createdAt}
              likes={code.likes}
            />
          </Link>
        );
      })}
    </main>
  );
}
