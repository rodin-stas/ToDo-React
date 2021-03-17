import React from "react";

const FooterFilters = () => {
  return (
    <ul className="filters">
      <li className="filters-list">
        <a className="filters-list_item" href="#">
          all
        </a>
        <a className="filters-list_item" href="#">
          active
        </a>
        <a className="filters-list_item" href="#">
          completed
        </a>
        <a className="filters-list_item" href="#">
          like
        </a>
      </li>
    </ul>
  );
};

export default FooterFilters;
