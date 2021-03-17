import React, {Component} from "react";

// const PostAdd = () => {
//   return (
//     <input className="app-add-form" type="text" placeholder="enter todo" />
//   );
// };

class PostAdd extends Component {
  constructor() {
    super();
    this.state = {
      placeholder: "enter todo",
    };
    this.cteateListItem = (event) => {
      if (event.keyCode == 13) {
        console.log("Нужно Создовать заметку");
      }
    };
  }
  componentDidMount() {
    document.addEventListener("keydown", this.cteateListItem);
  }
  // cteateListItem() {
  //   console.log("Нужно Создовать заметку");
  // }
  render() {
    const placeholder = this.state.placeholder;
    // const text = this.state.text;
    return (
      <input
        className="app-add-form"
        type="text"
        placeholder={placeholder}
        onChange={this.cteateListItem}
      />
    );
  }
}
export default PostAdd;
