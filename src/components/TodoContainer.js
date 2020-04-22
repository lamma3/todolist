import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoListAPI from "../api/todo-list-api";
import { Card } from "antd";

export class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.addTodoItem = this.addTodoItem.bind(this);
    this.switchTodoStatus = this.switchTodoStatus.bind(this);
    this.deleteTodoItem = this.deleteTodoItem.bind(this);

    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    TodoListAPI.getTodoList()
      .then((response) => this.setState(() => ({ todoList: response.data })))
      .catch((error) => console.log(error));
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

  switchTodoStatus(id) {
    let todoList = [...this.state.todoList];
    let itemIndex = todoList.findIndex((item) => item.id === id);
    todoList[itemIndex].status = !todoList[itemIndex].status;
    this.setState(() => ({
      todoList: todoList,
    }));
  }

  deleteTodoItem(id) {
    let todoList = [...this.state.todoList];
    let itemIndex = todoList.findIndex((item) => item.id === id);
    todoList.pop(itemIndex);
    this.setState(() => ({
      todoList: todoList,
    }));
  }

  generateTodoItemId() {
    let ids = this.state.todoList.map((item) => parseInt(item.id));
    let id = ids.length > 0 ? Math.max(...ids) + 1 : 1;
    return id.toString();
  }

  render() {
    return (
      <Card title="Todo List">
        <form onSubmit={this.addTodoItem}>
          <input name="newItem" type="text" />
          <input type="submit" />
        </form>
        <TodoList
          listItems={this.state.todoList}
          onToggleTodoStatusChange={this.switchTodoStatus}
          onRemoveTodo={this.deleteTodoItem}
        />
      </Card>
    );
  }
}

export default TodoContainer;
