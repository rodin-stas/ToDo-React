import React, { Component } from "react";
import { Button } from "reactstrap";

export default class PostListItem extends Component {
  render() {
    const { textItem, onDelete, onToggleLike, like } = this.props;
    let classNames = "far fa-heart btn";

    if (like) {
      classNames += " like";
    }

    return (
      <>
        <label>
          <input type="checkbox" className="mr-2" onChange={this.onLike} />
          {textItem}
        </label>
        <div className="item-btn">
          <Button
            outline
            color="primary"
            className="far fa-trash-alt btn mr-1"
            onClick={onDelete}
          ></Button>
          <Button
            outline
            color="primary"
            className={classNames}
            onClick={onToggleLike}
          ></Button>
        </div>
      </>
    );
  }
}
