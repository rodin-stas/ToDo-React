import React from "react";
import PostListItem from "../post-list-item";
import { ListGroup, ListGroupItem } from "reactstrap";

const PostList = ({ posts, onDelete }) => {
  const todoItem = posts.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <ListGroupItem
        key={id}
        className="d-flex d-flex justify-content-between align-items-baseline"
      >
        <PostListItem {...itemProps} onDelete={() => onDelete(id)} />
      </ListGroupItem>
    );
  });

  return <ListGroup>{todoItem}</ListGroup>;
};

export default PostList;
