import React from "react";
import { useState } from "react";

export default function CreateCode() {
  return (
    <div className="create-post">
      <form className="ui form">
        <div className="form-field">
          <div className="field">
            <label></label>
            <h2>Write code here:</h2>
            <textarea id="code-input" />
            <div className="field">
              <h2>Comment:</h2>
              <textarea rows="2" cols="50" id="text"></textarea>
            </div>
            <button
              className="ui button"
              type="submit"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// const [postData, setPostData] = useState({});
// const [commentData, setCommentData] = useState([]);
// const handleSubmit = (e) => {
//   e.preventDefault();
//   // console.log(e.target[0].value);
//   setCommentData([
//     ...commentData,
//     { body: e.target[0].value, date: new Date().toString(), votes: 0 },
//   ]);
// };

// return !commentData ? null : (
//   <main>
//     <img src={postData.img} alt={postData.img} />
//     <p id="post-description">{postData.caption}</p>
//     <section>
//       <div>
//         {commentData.map((el) => {
//           return (
//             <div key={el.body}>
//               <h3>Posted by Thomas at {el.date}</h3>
//               <p id="description">{el.body}</p>
//               <p>Votes: {el.votes}</p>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//     <form className="comment-form" id="comment-form" onSubmit={handleSubmit}>
//       <label htmlFor="">Post comment here:</label>
//       <textarea
//         name="comment-text"
//         id="comment-text"
//         cols="30"
//         rows="3"
//       ></textarea>
//       <button type="submit">Submit</button>
//     </form>
//   </main>
// );
