import React, { Component } from "react";
import { Container } from "reactstrap";
import "./app.css";
import nextId from "react-id-generator";
import AppHeader from "../app-header";
import PostAdd from "../post-add-form";
import PostList from "../post-list";
import AppFooter from "../app-footer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { textItem: "1 - я заметка", like: false, id: 1 },
        { textItem: "2 - я заметка", like: false, id: 2 },
        { textItem: "3 - я заметка", like: false, id: 3 },
        { textItem: "4 - я заметка", like: false, id: 4 },
      ],
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return { data: newArr };
    });
  }

  addItem(body) {
    const newItem = {
      textItem: body,
      like: false,
      id: nextId(),
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }
  onToggleLike(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id); // Поиск в Массиве Элемента по id

      const old = data[index]; // Сохранили старый элемент из массива по индексу
      const newItem = { ...old, like: !old.like }; // Создали новый элемент с противоположным значением like
      const newArr = [
        // Добавили новый элемент в массив вместо старого
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];
      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <Container className="app">
        <AppHeader />
        <PostAdd onAdd={this.addItem} />
        <AppFooter />
        <PostList
          posts={this.state.data}
          onDelete={this.deleteItem}
          onToggleLike={this.onToggleLike}
        />
      </Container>
    );
  }
}
