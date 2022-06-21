import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const SearchForm = ({ handleOnSubmit }) => {
  const [str, setStr] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(str);
  };

  return (
    <div className="mt-5">
      <h1 className="text-center mb-2">My Movie List</h1>
      <Form onSubmit={formSubmit} className="mt-4">
        <Row>
          <Col></Col>
          <Col>
            <Form.Control
              onChange={handleOnChange}
              placeholder="Search movie name ..."
              required
            />
          </Col>
          <Col>
            <Button type="submit" variant="primary">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
