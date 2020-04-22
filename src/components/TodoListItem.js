import React, { Component } from "react";

export class TodoListItem extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       id: props.id,
       content: props.content,
       status: props.status,
    }
  }
  
  render() {
    return (
      <div>
        <span>{this.state.content}</span>
      </div>
    );
  }
}

export default TodoListItem;