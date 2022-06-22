import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomList = ({ movie = {}, func, inSearchForm }) => {
  const { Title, Poster, imdbRating, Plot } = movie;
  return (
    <Card
      style={{ width: "100%" }}
      className="mt-3 d-flex flex-row justify-content-between"
    >
      {/* <div style={{ width: "150px" }}>
      </div> */}
      <Card.Img variant="top" src={Poster} style={{ width: "150px" }} />
      <Card.Body>
        <Card.Title>{Title.toUpperCase()}</Card.Title>
        <Card.Title>
          Rating : <kbr> {imdbRating}</kbr>
        </Card.Title>
        <div>{Plot}</div>

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
          <div className="text-end">
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
