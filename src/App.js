import React from "react";
import "antd/dist/antd.css";
import TodoContainer from "./components/TodoContainer";
import { Layout, Typography, Row } from "antd";
const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <Layout>
        <Header>
          <Title style={{ color: "white" }}>Todo List</Title>
        </Header>
        <Content>
          <TodoContainer />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
