import React from "react";

import { Row, Col } from "antd";

import { Button } from "Components";

import {
  cricketBatsman,
  cricketBowler,
  cricketChampionShip,
} from "assets/images";

import classes from "./Home.module.scss";

const Home = (props: any) => {
  return (
    <Row className={classes.home} justify="space-between">
      <Col>
        <img width="370px" src={cricketBatsman} alt="batsman" />
      </Col>
      <Col>
        <Row justify="center" gutter={[0, 16]}>
          <Col>
            <img width="460px" src={cricketChampionShip} alt="championShip" />
          </Col>
          <Col span={24}>
            <Row justify="center" gutter={28}>
              <Col>
                <Button>Host a tournament</Button>
              </Col>
              <Col>
                <Button>Find a tournament</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col>
        <img width="300px" src={cricketBowler} alt="bowler" />
      </Col>
    </Row>
  );
};

export default Home;
