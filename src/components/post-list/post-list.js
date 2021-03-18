import React from "react";
import PostListItem from "../post-list-item";

const PostList = ({posts}) => {
  const todoItem = posts.map((item) => {
    const {id, ...itemProps} = item;
    return (
      <li key={id} className="app-list-item">
        <>
          <PostListItem {...itemProps} />
        </>
      </li>
    );
  });

  return <ul className="app-list">{todoItem}</ul>;
};

export default PostList;
