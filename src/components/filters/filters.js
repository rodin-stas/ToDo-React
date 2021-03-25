import React, {Component} from "react";
// import {Nav, NavItem, NavLink} from "reactstrap";
import {Button} from "reactstrap";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.navLink = [
      {name: "active", label: "Активные"},
      {name: "like", label: "Важные"},
      {name: "done", label: "Выполненные"},
      {name: "all", label: "Все"},
    ];
  }

  render() {
    const links = this.navLink.map(({name, label}) => {
      const active = this.props.filter === name;
      // const clazz = active ? "active" : "noActive";
      return (
        <Button
          color={active ? "primary" : "secondary"}
          size="sm"
          key={name}
          type="button"
          className="m-1"
          onClick={() => this.props.onFilterSelect(name)}
        >
          {label}
        </Button>
      );
    });
    return <div className="bts-wrapper">{links}</div>;
  }
}
