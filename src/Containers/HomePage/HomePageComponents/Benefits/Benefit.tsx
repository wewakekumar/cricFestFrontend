import React from "react";

import { Row, Col } from "antd";

import classes from "./Benefits.module.scss";

const Benefit = (props: any) => {
  return (
    <Row justify="space-between" className={classes.benefit}>
      <Col className={classes.imgContainer}>
        <img src={props.img} alt={props.alt} />
      </Col>
      <Col span={14}>
        <p className={classes.heading}>{props.heading}</p>
        <p className={classes.desc}>{props.desc}</p>
      </Col>
    </Row>
  );
};

export default Benefit;
