import React, { useEffect } from "react";

import { Row, Col } from "antd";

import { Header, Home } from "./HomePageComponents";

const HomePage = (props: any) => {
  useEffect(() => {}, []);
  return (
    <Row align="middle">
      <Col span={24}>
        <Header />
      </Col>
      <Col span={24}>
        <Home />
      </Col>
    </Row>
  );
};

export default HomePage;
