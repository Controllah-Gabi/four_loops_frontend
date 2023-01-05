import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getCodesById, patchCodeLikes } from '../Utils/api';
import like from "../assets/love.png"

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
          <Link to={`/codes/${code_id}/comments`}>
            <p className='comment'>Comments</p>
        </Link>
        </div>
    );
}
