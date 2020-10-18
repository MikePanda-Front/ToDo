import React from "react";
import { Route, Switch } from "react-router-dom";

import ToDoList from "../Components/ToDoList";
import ToDoItem from "../Components/ToDoItem";
import ToDoItemAdd from "../Components/ToDoItemAdd";

const Router = () => {
  return (
    <Switch>
      <Route component={ToDoList} path="/" exact />
      <Route component={ToDoItem} path="/Edit/:id" />
      <Route component={ToDoItemAdd} path="/Add" />
    </Switch>
  );
};

export default Router;
