import React, { useEffect, useState } from "react";
import { Row, Col, ButtonGroup, Button } from "react-bootstrap";
import { CustomCard } from "./CustomCard";
import { CustomList } from "./CustomList";

export const MovieList = ({ movieList, deleteMovie }) => {
  const [displayList, setDisplayList] = useState([]);
  const [view, setView] = useState("grid");

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
            <Button variant="info" onClick={() => setView("grid")}>
              Grid
            </Button>
            <Button variant="warning" onClick={() => setView("list")}>
              List
            </Button>
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
          {displayList.map((item, i) =>
            view === "grid" ? (
              <CustomCard key={i} movie={item} func={deleteMovie} />
            ) : (
              <CustomList key={i} movie={item} func={deleteMovie} />
            )
          )}
        </Col>
      </Row>
    </div>
  );
};
