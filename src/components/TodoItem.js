import React, { Component } from "react";
import { Card, Typography, Button } from "antd";
const { Text } = Typography;

export class TodoItem extends Component {
  render() {
    const { data, onToggleTodoStatusChange, onRemoveTodo } = this.props;

    return (
      <Card.Grid onClick={() => onToggleTodoStatusChange(data.id)}>
        <div style={{ float: "left" }}>
          <Text delete={!data.status}>{data.content}</Text>
        </div>
        <div style={{ float: "right" }}>
          <Button
            onClick={() => onRemoveTodo(data.id)}
            type="danger"
            shape="circle"
            size="small"
          >
            X
          </Button>
        </div>
      </Card.Grid>
    );
  }
}

export default TodoItem;
