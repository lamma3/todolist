import React, { Component } from "react";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <input name="new-item" type="text" />
      </div>
    );
  }
}

export default TodoContainer;
