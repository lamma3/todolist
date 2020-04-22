import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.listItems.map(({ id, content, status }, index) => (
          <TodoItem key={index} id={id} content={content} status={status} />
        ))}
      </div>
    );
  }
}

export default TodoList;
