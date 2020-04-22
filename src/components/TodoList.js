import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: props.listItems,
    };
  }

  render() {
    return (
      <div>
        {this.state.todoList.map(({ id, content, status }) => (
          <TodoItem id={id} content={content} status={status} />
        ))}
      </div>
    );
  }
}

export default TodoList;
