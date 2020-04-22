import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const {data, onToggleTodoStatusChange} = this.props;

    return (
      <div>
        <span
          className={data.status? "": "done"}
          onClick={() =>
            onToggleTodoStatusChange(data.id)
          }
        >
          {data.content}
        </span>
        <button>close</button>
      </div>
    );
  }
}

export default TodoItem;
