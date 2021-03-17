import React from "react";
import PostListItem from "../post-list-item";

const PostList = () => {
  return (
    <ul className="app-list">
      <PostListItem textItem="1-я заметка" />
      <PostListItem textItem="2-я заметка" />
      <PostListItem textItem="3-я заметка" />
    </ul>
  );
};

export default PostList;
