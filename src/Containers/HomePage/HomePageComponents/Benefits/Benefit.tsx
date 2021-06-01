import React from "react";

import { Row, Col } from "antd";

import { Button } from "Components";

import classes from "./Benefits.module.scss";

const Benefit = (props: any) => {
  return (
    <Row justify="center" className={classes.benefit}>
      <Col className={classes.imgContainer} span={24}>
        <img width="500px" height="500px" src={props.img} alt={props.alt} />
      </Col>
      <Col span={24}>
        <Row justify="center">
          <p className={classes.heading}>{props.heading}</p>
        </Row>
      </Col>
      <Col span={24}>
        <Row justify="center">
          <Button>Know more</Button>
        </Row>
      </Col>
    </Row>
  );
};

export default Benefit;
