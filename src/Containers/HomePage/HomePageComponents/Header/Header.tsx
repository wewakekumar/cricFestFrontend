import React from "react";

import { Row, Col } from "antd";

import { StretchedButton, Header } from "Components";

import classes from "./Header.module.scss";

const MyHeader = (props: any) => {
  return (
    <Header>
      <Row justify="space-between" align="middle">
        <Col className={classes.heading}>
          Cric<span className={classes.heading2}>Fest</span>
        </Col>
        <Col className={classes.headingButton}>
          <StretchedButton>Log in</StretchedButton>
        </Col>
      </Row>
    </Header>
  );
};

export default MyHeader;
