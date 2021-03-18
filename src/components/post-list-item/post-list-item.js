import React, {Component} from "react";

// const PostListItem = () => {
//   return (
//     <li className="app-list_item">
//       <label>
//         <input
//           type="checkbox"
//           // onChange={() => setChecked(!checked)}
//         />
//         Тут заметка
//       </label>
//       <div className="item-btn">
//         <i className="far fa-trash-alt btn"></i>
//         <i className="far fa-heart btn"></i>
//       </div>
//     </li>
//   );
// };

export default class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      like: false,
    };

    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    this.setState(({like}) => ({
      like: !like,
    }));
  }

  render() {
    const {textItem} = this.props;
    const {like} = this.state;

    return (
      <>
        <label>
          <input type="checkbox" onChange={this.onLike} />
          {textItem}
        </label>
        <div className="item-btn">
          <i className="far fa-trash-alt btn"></i>
          <i
            className={!like ? "far fa-heart btn" : "far fa-heart btn like"}
          ></i>
        </div>
      </>
    );
  }
}
