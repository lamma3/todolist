import React, { Component } from "react";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.addTodoItem = this.addTodoItem.bind(this);

    this.state = {
      todoList: [{ id: "1", content: "content1", status: true }],
    };
  }

  addTodoItem(event) {
    event.preventDefault();
    console.log(this.state.todoList);
    let newItem = {
      content: event.target.newItem.value,
      status: true,
    };
    this.setState((state) => ({
      todoList: [...state.todoList, newItem],
    }));
  }

  render() {
    return (
      <div>
        <TodoList listItems={this.state.todoList} />
        <form onSubmit={this.addTodoItem}>
          <input name="newItem" type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoContainer;
