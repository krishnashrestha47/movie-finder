import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const SearchForm = () => {
  return (
    <div className="mt-5">
      <h1 className="text-center mb-2">My Movie List</h1>
      <Form className="mt-4">
        <Row>
          <Col></Col>
          <Col>
            <Form.Control placeholder="Search movie name ..." />
          </Col>
          <Col>
            <Button variant="primary">Search</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
