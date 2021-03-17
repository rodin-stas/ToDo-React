import React, {Component} from "react";
import PropTypes from "prop-types";

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

class PostListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textItem: this.props.textItem,
    };

    this.changetext = () => {
      console.log("Нужно Пероносить в Выполненные");
    };
  }

  //   changeText() {
  //     console.log("Нужно Пероносить в Выполненные");
  //   }

  //   Самый новый способ----------------------------------------
  //   changeText = () => {
  //     console.log("Нужно Пероносить в Выполненные");
  //   };
  //-------------------------------------------------------
  render() {
    const postText = this.state.textItem;
    return (
      <li className="app-list_item">
        <label>
          <input type="checkbox" onChange={this.changetext} />
          htrhrth+{postText}
        </label>
        <div className="item-btn">
          <i className="far fa-trash-alt btn"></i>
          <i className="far fa-heart btn"></i>
        </div>
      </li>
    );
  }
}
PostListItem.propTypes = {
  textItem: PropTypes.string,
};
export default PostListItem;
