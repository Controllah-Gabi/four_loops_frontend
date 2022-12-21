import React from "react";
import { useState } from "react";

export default function IndividualPost() {
  const [postData, setPostData] = useState({});
  const [commentData, setCommentData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    setCommentData([
      ...commentData,
      { body: e.target[0].value, date: new Date().toString(), votes: 0 },
    ]);
  };

  return !commentData ? null : (
    <main>
      <img src={postData.img} alt={postData.img} />
      <p id="post-description">{postData.caption}</p>
      <section>
        <div>
          {commentData.map((el) => {
            return (
              <div key={el.body}>
                <h3>Posted by Thomas at {el.date}</h3>
                <p id="description">{el.body}</p>
                <p>Votes: {el.votes}</p>
              </div>
            );
          })}
        </div>
      </section>
      <form className="comment-form" id="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="">Post comment here:</label>
        <textarea
          name="comment-text"
          id="comment-text"
          cols="30"
          rows="3"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}
