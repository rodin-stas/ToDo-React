import React, {Component} from "react";
import {Button, Input, FormGroup, Form} from "reactstrap";

class PostAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);

    this.onValueChange = this.onValueChange.bind(this);
  }

  onValueChange(e) {
    this.setState({
      text: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.text.length);
    if (this.state.text.length !== 0) {
      this.props.onAdd(this.state.text);
      this.setState({
        //Оновлякм поле ввода
        text: "",
      });
    }
  }

  render() {
    // const {onAdd} = this.props;
    return (
      <FormGroup>
        <Form
          className="app-add-form d-flex flex-row bd-highlight justify-content-around"
          onSubmit={this.onSubmit}
        >
          <Input
            className="app-add-form_input mr-1"
            type="text"
            placeholder="Напишите замктку"
            onChange={this.onValueChange}
            value={this.state.text} // Оновлякм поле ввода, делаем контролируемый компонент
          />

          <Button type="submit" outline color="primary">
            Add
          </Button>
        </Form>
      </FormGroup>
    );
  }
}

export default PostAdd;
