import React, { Component } from "react";
import TodoList from "./TodoList";
import TodoListAPI from "../api/todo-list-api";
import { Form, Input, Button, Card } from "antd";

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

  addTodoItem(inputs) {
    let newItem = {
      content: inputs.newItem,
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
      <Card
        title={
          <Form name="addTodoItem" onFinish={this.addTodoItem} layout="inline">
            <Form.Item name="newItem">
              <Input placeholder="Add a new todo item" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        }
      >
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
