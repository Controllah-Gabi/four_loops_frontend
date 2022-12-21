import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Create() {
  const [uploadImg, setuploadImg] = useState(undefined);

  const handleChange = (e) => {
    setuploadImg(e.target.files[0]);

    // console.log(URL.createObjectURL(e.target.files[0]))
  };
  return (
    <div>
      <form>
        <label>Select a file</label>
        <input
          type="file"
          name="Myfile"
          accept="image/png, image/gif, image/jpeg"
          id="file"
          onChange={handleChange}
        />
        {uploadImg ? (
          <img id="image" src={URL.createObjectURL(uploadImg)} />
        ) : null}
        <textarea rows="2" cols="50" id="text"></textarea>
        <Link to={`/post`}>
          <button
            type="submit"
            // onClick={(e) => {
            //   e.preventDefault();
            // }}
          >
            Submit
          </button>
        </Link>
      </form>
    </div>
  );
}
