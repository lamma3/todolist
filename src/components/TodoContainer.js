import React, { Component } from "react";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.addTodoItem = this.addTodoItem.bind(this);
    this.switchTodoStatus = this.switchTodoStatus.bind(this);

    this.state = {
      todoList: [
        { id: "1", content: "content1", status: true },
        { id: "2", content: "content2", status: true },
      ],
    };
  }

  addTodoItem(event) {
    event.preventDefault();
    let newItem = {
      id: this.generateTodoItemId(),
      content: event.target.newItem.value,
      status: true,
    };
    this.setState((state) => ({
      todoList: [...state.todoList, newItem],
    }));
  }

  generateTodoItemId() {
    let ids = this.state.todoList.map(item => parseInt(item.id));
    return (Math.max(...ids) + 1).toString();
  }

  switchTodoStatus(id) {
    let todoList = [...this.state.todoList];
    let itemIndex = todoList.findIndex((item) => item.id === id);
    todoList[itemIndex].status = !todoList[itemIndex].status;
    this.setState(() => ({
      todoList: todoList,
    }));
  }

  render() {
    return (
      <div>
        <TodoList
          listItems={this.state.todoList}
          onToggleTodoStatusChange={this.switchTodoStatus}
        />
        <form onSubmit={this.addTodoItem}>
          <input name="newItem" type="text" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default TodoContainer;
