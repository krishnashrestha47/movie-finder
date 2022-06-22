import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { fetchMovieInfo } from "./helpers/axiosHelper";

const App = () => {
  const [movie, setMovie] = useState({});
  const [showErr, setShowErr] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleOnSubmit = async (str) => {
    const { data } = await fetchMovieInfo(str);
    setMovie(data);
    data.Response === "False" ? setShowErr(data.Error) : setShowErr("");
  };

  const movieSelect = (movie) => {
    setMovieList([...movieList, movie]);
    setMovie({});
  };
  console.log(movieList);
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          {movie.imdbID && <CustomCard movie={movie} func={movieSelect} />}
          {showErr && <Alert variant="danger">{showErr}</Alert>}
        </div>
        <hr />
        <MovieList movieList={movieList} />
      </Container>
    </div>
  );
};

export default App;
