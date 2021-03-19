import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Typography, Row, Col } from 'antd';
import './App.css';

const { Header, Content } = Layout;


const App: React.FunctionComponent = () => {
  return (
    <Layout>
      <Header></Header>
      <Content></Content>
    </Layout>
  );
}

export default App;
