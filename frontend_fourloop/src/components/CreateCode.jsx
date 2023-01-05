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






