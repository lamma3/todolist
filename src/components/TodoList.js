import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

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
        {this.state.todoList.map(({id, content, status}) => (
          <TodoListItem id={id} content={content} status={status} />
        ))}
      </div>
    );
  }
}

export default TodoList;
