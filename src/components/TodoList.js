import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    const {listItems, onToggleTodoStatusChange} = this.props;

    return (
      <div>
        {listItems.map((item) => (
          <TodoItem
            key={item.id}
            data={item}
            onToggleTodoStatusChange={onToggleTodoStatusChange}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
