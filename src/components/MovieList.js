import React from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { CustomCard } from "./CustomCard";

export const MovieList = () => {
  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary">All</Button>
            <Button variant="danger">Action</Button>
            <Button variant="success">Romantic</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="info">Grid</Button>
            <Button variant="warning">List</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col className="d-flex flex-wrap justify-content-between">
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};
