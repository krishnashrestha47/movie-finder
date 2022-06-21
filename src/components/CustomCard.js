import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ movie = {} }) => {
  const { Title, Poster, imdbRating } = movie;
  return (
    <Card style={{ width: "18rem" }} className="mt-3">
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Title>Rating: {imdbRating}</Card.Title>
        <div className="d-flex justify-content-between mt-2">
          <Button variant="danger">Action</Button>
          <Button variant="success">Romantic</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
