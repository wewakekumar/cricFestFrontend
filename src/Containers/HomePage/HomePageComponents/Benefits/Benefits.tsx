import React from "react";

import { Row, Col } from "antd";

import Benefit from "./Benefit";

import { tournament } from "assets/images";

import classes from "./Benefits.module.scss";

const Benefits = (props: any) => {
  return (
    <Row className={classes.benefits}>
      <Col span={24}>
        <Row justify="center">
          <Col className={classes.mainHeading}>Why are you here?</Col>
        </Row>
      </Col>

      <Col span={24}>
        <Benefit
          img={tournament}
          alt="tournament"
          heading="Host a tournament"
          desc="Host a cricket tournament with us. Reach to your targeted audience with the help of our tools. Invite people to participate in your tournament. "
        />
      </Col>

      <Col span={24}>
        <Benefit
          img={tournament}
          alt="tournament"
          heading="Host a tournament"
          desc="Host a cricket tournament with us. Reach to your targeted audience with the help of our tools. Invite people to participate in your tournament. "
        />
      </Col>
    </Row>
  );
};

export default Benefits;
