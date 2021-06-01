import React from "react";

import { Row, Col } from "antd";

import Benefit from "./Benefit";

import { hostATournament, findATournament } from "assets/images";

import classes from "./Benefits.module.scss";

const Benefits = (props: any) => {
  return (
    <Row className={classes.benefits}>
      <Col span={24}>
        <Row justify="center">
          <Col className={classes.mainHeading}>Why are you here?</Col>
        </Row>
      </Col>
      <Row justify="space-around">
        <Col span={8}>
          <Benefit
            img={hostATournament}
            alt="Host Tournament"
            heading="Host a tournament"
          />
        </Col>

        <Col span={8}>
          <Benefit
            img={findATournament}
            alt="Find Tournament"
            heading="Find a tournament"
          />
        </Col>
      </Row>
    </Row>
  );
};

export default Benefits;
