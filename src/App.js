import React from "react";
import "antd/dist/antd.css";
import TodoContainer from "./components/TodoContainer";
import { Row } from "antd";

function App() {
  return (
    <div className="App">
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <TodoContainer />
      </Row>
    </div>
  );
}

export default App;
