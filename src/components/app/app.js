import React from "react";

import AppHeader from "../app-header";
import PostAdd from "../post-add-form";
import PostList from "../post-list";
import AppFooter from "../app-footer";

const App = () => {
  const data = [
    {textItem: "1 - я заметка", like: true, id: 1},
    {textItem: "2 - я заметка", like: false, id: 2},
    {textItem: "3 - я заметка", like: true, id: 3},
    {textItem: "4 - я заметка", like: true, id: 4},
  ];

  return (
    <div className="app">
      <AppHeader />
      <PostAdd placeholder="d2weuewhudew" />
      <PostList posts={data} />
      <AppFooter />
    </div>
  );
};

export default App;
