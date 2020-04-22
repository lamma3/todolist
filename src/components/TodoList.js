import React, { Component } from "react";
import TodoItem from "./TodoItem";

export class TodoList extends Component {
  render() {
    const { listItems, onToggleTodoStatusChange, onRemoveTodo } = this.props;

    return (
      <div>
        {listItems.map((item) => (
          <TodoItem
            key={item.id}
            data={item}
            onToggleTodoStatusChange={onToggleTodoStatusChange}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
