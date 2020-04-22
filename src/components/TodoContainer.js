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
    TodoListAPI.getAll()
      .then((response) => this.setState(() => ({ todoList: response.data })))
      .catch((error) => console.log(error));
  }

  addTodoItem(event) {
    event.preventDefault();

    let newItem = {
      content: event.target.newItem.value,
      status: true,
    };

    TodoListAPI.addItem(newItem)
      .then((response) =>
        this.setState((state) => ({
          todoList: [...state.todoList, response.data],
        }))
      )
      .catch((error) => console.log(error));
  }

  switchTodoStatus(id) {
    let itemToUpdate = this.state.todoList.find((item) => item.id === id);
    itemToUpdate.status = !itemToUpdate.status;

    TodoListAPI.updateItem(itemToUpdate)
      .then((response) => {
        let todoList = [...this.state.todoList];
        let itemIndex = todoList.findIndex(
          (item) => item.id === response.data.id
        );
        todoList[itemIndex] = response.data;
        this.setState(() => ({
          todoList: todoList,
        }));
      })
      .catch((error) => console.log(error));
  }

  deleteTodoItem(id) {
    TodoListAPI.deleteItemById(id).then((response) => {
      let todoList = [...this.state.todoList];
      let itemIndex = todoList.findIndex(
        (item) => item.id === response.data.id
      );
      todoList.pop(itemIndex);
      this.setState(() => ({
        todoList: todoList,
      }));
    });
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
