import React, {Component} from "react";
import {Container} from "reactstrap";
import "./app.css";
import nextId from "react-id-generator";
import AppHeader from "../app-header";
import PostAdd from "../post-add-form";
import PostList from "../post-list";
import Search from "../search";
import Filters from "../filters";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          textItem: "1 - я заметка",
          like: false,
          done: false,
          active: true,
          id: 1,
        },
        {
          textItem: "2 - я заметка",
          like: false,
          done: false,
          active: true,
          id: 2,
        },
        {
          textItem: "3 - я заметка",
          like: false,
          done: false,
          active: true,
          id: 3,
        },
        {
          textItem: "4 - я заметка",
          like: false,
          done: false,
          active: true,
          id: 4,
        },
      ],
      term: "",
      filter: "active",
    };
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.onToggleLike = this.onToggleLike.bind(this);
    this.onToggleDone = this.onToggleDone.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    this.filterPosts = this.filterPosts.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return {data: newArr};
    });
  }

  addItem(body) {
    const newItem = {
      textItem: body,
      like: false,
      done: false,
      active: true,
      id: nextId(),
    };
    // localStorage.setItem(nextId(), JSON.stringify(new));
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  }

  onToggleLike(id) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id); // Поиск в Массиве Элемента по id

      const old = data[index]; // Сохранили старый элемент из массива по индексу
      const newItem = {...old, like: !old.like}; // Создали новый элемент с противоположным значением like
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

  onToggleDone(id) {
    this.setState(({data}) => {
      const index = data.findIndex((elem) => elem.id === id); // Поиск в Массиве Элемента по id

      const old = data[index]; // Сохранили старый элемент из массива по индексу
      const newItem = {...old, done: !old.done, active: !old.active}; // Создали новый элемент с противоположным значением like и done
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

  searchPosts(items, term) {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.textItem.indexOf(term) > -1; // Если = -1 значит нет совпаений
    });
  }

  filterPosts(items, filter) {
    switch (filter) {
      case "all":
        console.log(items);
        return items;
      case "like":
        console.log(items.filter((item) => item.like));
        return items.filter((item) => item.like);
      case "done":
        console.log(items.filter((item) => item.done));
        return items.filter((item) => item.done);
      case "active":
        console.log(items.filter((item) => item.active));
        return items.filter((item) => item.active);
    }
  }

  onUpdateSearch(term) {
    this.setState({term});
  }

  onFilterSelect(filter) {
    this.setState({filter});
  }
  render() {
    const {data, term, filter} = this.state;
    const liked = data.filter((item) => item.like).length; // если like=true то мы его возвращаем в массив и бере его длину
    const allPosts = data.length;
    const done = data.filter((item) => item.done).length;

    // const visiblePosts = this.searchPosts(data, term);
    const visiblePosts = this.filterPosts(this.searchPosts(data, term), filter); //передаем this.searchPosts(data, term) как аргумент в this.filterPosts

    return (
      <Container className="app">
        <AppHeader allPosts={allPosts} liked={liked} done={done} />
        <div className="app-main">
          <PostAdd onAdd={this.addItem} />
          <div className="app-nav d-flex justify-content-between align-items-center border rounded mb-2">
            <Filters filter={filter} onFilterSelect={this.onFilterSelect} />
            <Search onUpdateSearch={this.onUpdateSearch} />
          </div>
          <PostList
            posts={visiblePosts} // posts={this.state.data}
            onDelete={this.deleteItem}
            onToggleLike={this.onToggleLike}
            onToggleDone={this.onToggleDone}
          />
        </div>
      </Container>
    );
  }
}
