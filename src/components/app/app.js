import React from "react";

import AppHeader from "../app-header";
import PostAdd from "../post-add-form";
import PostList from "../post-list";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <PostAdd />
    </div>
  );
};

export default App;
