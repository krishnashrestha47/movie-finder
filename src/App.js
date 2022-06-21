import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";
import { fetchMovieInfo } from "./helpers/axiosHelper";

const App = () => {
  const [movie, setMovie] = useState({});

  const handleOnSubmit = async (str) => {
    const { data } = await fetchMovieInfo(str);
    setMovie(data);
  };
  console.log(movie);

  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          {movie.imdbId && <CustomCard movie={movie} />}
        </div>
        <hr />
        <MovieList />
      </Container>
    </div>
  );
};

export default App;
