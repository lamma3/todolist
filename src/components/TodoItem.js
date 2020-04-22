import React, { Component } from "react";
import { Card, Typography, Button, Space } from "antd";
const { Text } = Typography;

export class TodoItem extends Component {
  render() {
    const { data, onToggleTodoStatusChange, onRemoveTodo } = this.props;

    return (
      <Card.Grid>
        <Space>
          <Text
            delete={!data.status}
            onClick={() => onToggleTodoStatusChange(data.id)}
          >
            {data.content}
          </Text>
          <Button
            onClick={() => onRemoveTodo(data.id)}
            type="danger"
            shape="circle"
            size="small"
          >
            X
          </Button>
        </Space>
      </Card.Grid>
    );
  }
}

export default TodoItem;
