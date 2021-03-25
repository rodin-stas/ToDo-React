import React from "react";

const AppHeader = ({liked, allPosts, done}) => {
  return (
    <div className="app-header text-center">
      <h1 className="app-header_title">Todos</h1>
      <span className="app-nav_counter mr-3">
        Всего-{allPosts} Важных-{liked} выполненных-{done}
      </span>
    </div>
  );
};

export default AppHeader;
