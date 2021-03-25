import React, {Component} from "react";
// import {Button} from "reactstrap";

export default class PostListItem extends Component {
  render() {
    const {
      textItem,
      onDelete,
      onToggleLike,
      onToggleDone,
      like,
      done,
    } = this.props;
    let classNames = "fas fa-star",
      classNamesLabel = "active";

    if (like) {
      classNames += " like";
    }
    if (done) {
      classNamesLabel = "done";
    }

    return (
      <>
        <label className={classNamesLabel}>
          <input type="checkbox" className="mr-2" onChange={onToggleDone} />
          {textItem}
        </label>
        <div className="item-btn">
          <i className="far fa-trash-alt mr-1" onClick={onDelete}></i>
          <i className={classNames} onClick={onToggleLike}></i>
        </div>
      </>
    );
  }
}
