import React, { Component } from "react";
import TodoList from "./TodoList";

export class TodoContainer extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       todoList: [
        {id: "1", content: "content1", status: true},
       ],
    }
  }
  

  render() {
    return (
      <div>
        <TodoList listItems={this.state.todoList} />
        <input name="new-item" type="text" />
      </div>
    );
  }
}

export default TodoContainer;
