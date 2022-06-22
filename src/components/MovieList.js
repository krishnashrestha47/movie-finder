import React, { useEffect, useState } from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { CustomCard } from "./CustomCard";

export const MovieList = ({ movieList }) => {
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(movieList);
  }, [movieList]);

  const filterMovie = (mood) => {
    if (mood === "all") {
      return setDisplayList(movieList);
    }
    const tempArg = movieList.filter((item) => item.mood === mood);
    setDisplayList(tempArg);
  };

  return (
    <div>
      <Row>
        <Col className="d-flex justify-content-between">
          <ButtonGroup aria-label="Basic example">
            <Button variant="primary" onClick={() => filterMovie("all")}>
              All
            </Button>
            <Button variant="danger" onClick={() => filterMovie("action")}>
              Action
            </Button>
            <Button variant="success" onClick={() => filterMovie("romantic")}>
              Romantic
            </Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Basic example">
            <Button variant="info">Grid</Button>
            <Button variant="warning">List</Button>
          </ButtonGroup>
        </Col>
      </Row>

      <Row className="mt-5">
        <div>
          {displayList.length > 1
            ? displayList.length + " movies found !"
            : displayList.length + " movie found !"}
        </div>
        <Col className="d-flex flex-wrap justify-content-between">
          {displayList.map((item, i) => (
            <CustomCard movie={item} />
          ))}
        </Col>
      </Row>
    </div>
  );
};
