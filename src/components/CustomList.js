import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomList = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating } = movie;
  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between"
    >
      <Card.Img variant="top" src={Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating: {imdbRating}</Card.Title>

        {inSearchForm ? (
          <div className="d-flex justify-content-between mt-2">
            <Button
              variant="danger"
              onClick={() => func({ ...movie, mood: "action" })}
            >
              Action
            </Button>
            <Button
              variant="success"
              onClick={() => func({ ...movie, mood: "romantic" })}
            >
              Romantic
            </Button>
          </div>
        ) : (
          <div className="d-grid gap-2">
            <Button
              variant="danger"
              size="lg"
              onClick={() => func(movie.imdbID)}
            >
              Delete Movie
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
