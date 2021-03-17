import react from "react";
import PostListItem from "../post-list-item";

const PostList = () => {
  return (
    <ul className="app-list">
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </ul>
  );
};

export default PostList;
