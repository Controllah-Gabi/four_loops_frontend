import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCodesById, patchCodeLikes } from '../Utils/api';

export const IndividualCode = () => {
    const [likes, setLikes] = useState(0);
    const {code_id} = useParams()
    const [loading,setLoading]=useState(true)
    const [code,setCode] = useState({})
    
    const handleClick = () => {
        setLikes(likes + 1);
        patchCodeLikes(code_id);
    }
    useEffect(() => {
      
      getCodesById(code_id).then((codeData)=>{
        setCode(codeData)
        setLoading(false)
    }, [code_id]);
})
    
    
    return loading? <h2>Loading</h2>: (
      <div className="proj-imgbx">
        <div className="bottom-half-card">
          <h4>{code.title}</h4>
          <hr />
          <span>{code.code_body}</span>
          <hr />
          <span>{code.description}</span>
          <hr />
          <span>Created at: {code.createdAt}</span>
          <hr />
          <span>
            :+1: {likes}
            <button onClick={handleClick}>Like</button>
          </span>
          <Link to={`/codes/${code_id}/comments`}>
            <p>Comments</p>
        </Link>
        </div>
      </div>
    );
}
