import React, {Component} from "react";
import {Input, Form} from "reactstrap";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
  }
  onUpdateSearch(e) {
    const term = e.target.value;
    this.setState({term}); // term:term
    this.props.onUpdateSearch(term);
  }
  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Form
        className="app-add-form d-flex flex-row bd-highlight justify-content-around"
        onSubmit={this.onSubmit}
      >
        <Input
          className="app-add-form_input m-1"
          type="text"
          placeholder="Что ищем?"
          onChange={this.onUpdateSearch}
          value={this.state.text} // Оновлякм поле ввода, делаем контролируемый компонент
        />
      </Form>
    );
  }
}
