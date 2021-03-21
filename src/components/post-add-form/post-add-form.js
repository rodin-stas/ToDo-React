import React from "react";
import { Button, Input, FormGroup } from "reactstrap";

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
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const { onAdd } = this.props;
    return (
      <FormGroup className="app-add-form d-flex flex-row bd-highlight justify-content-around">
        <Input
          className="app-add-form_input mr-1"
          type="text"
          placeholder="Напишите замктку"
          value={this.state.value}
          onChange={this.handleChange}
        />

        <Button
          outline
          color="primary"
          className=""
          onClick={() => onAdd("Нужно создавать item")}
        >
          Add
        </Button>
      </FormGroup>
    );
  }
}

export default PostAdd;
