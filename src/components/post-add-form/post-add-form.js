import React from "react";

// const PostAdd = () => {
//   const cteateListItemBtn = (event) => {
//     event.preventDefault();
//     console.log("Нужно Создовать заметку от кнопки ");
//   };

//   return (
//     <form className="app-add-form">
//       <input
//         className="app-add-form_input"
//         type="text"
//         placeholder="Напишите замктку"
//         // onChange={this.cteateListItem}
//       />
//       <button className="app-add form_btn" onClick={cteateListItemBtn}>
//         Add
//       </button>
//     </form>
//   );
// };

class PostAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("Нужно переносить");
    event.preventDefault();
  }

  render() {
    return (
      <form className="app-add-form">
        <input
          className="app-add-form_input"
          type="text"
          placeholder="Напишите замктку"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button className="app-add form_btn" onClick={this.handleSubmit}>
          Add
        </button>
      </form>
    );
  }
}

export default PostAdd;
