import React, {Component} from "react";
// import {Nav, NavItem, NavLink} from "reactstrap";
import {Button} from "reactstrap";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.navLink = [
      {name: "all", label: "Все"},
      {name: "active", label: "Активные"},
      {name: "done", label: "Выполненные"},
      {name: "like", label: "Важные"},
    ];
  }

  render() {
    const links = this.navLink.map(({name, label}) => {
      const active = this.props.filter === name;
      const clazz = active ? "active" : "noActive";
      return (
        <Button
          color="primary"
          size="sm"
          key={name}
          type="button"
          className={clazz}
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </Button>
      );
    });
    return <div>{links}</div>;
  }
}
