import React, { Component } from "react";

import "./Styles.css";

import User03 from "../../../images/avatar3.jpg";

function CommentList({ props }) {
  return (
    <li>
      <div class="user-comment">
        <div class="user-avatar">
          <img src={props.author.avatar} alt="" />
        </div>
        <div class="comment">
          <span class="comment-text">
            <strong>{props.author.name}</strong>
            {props.author.post}
          </span>
        </div>
      </div>
    </li>
  );
}

export default CommentList;
