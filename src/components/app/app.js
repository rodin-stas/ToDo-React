import React from "react";

import AppHeader from "../app-header";
import PostAdd from "../post-add-form";
import PostList from "../post-list";
import AppFooter from "../app-footer";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <PostAdd placeholder="d2weuewhudew" />
      <PostList />
      <AppFooter />
    </div>
  );
};

export default App;
