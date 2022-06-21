import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";

function App() {
  const handleOnSubmit = (str) => {
    console.log(str);
  };
  return (
    <div className="wrapper">
      <Container>
        <SearchForm handleOnSubmit={handleOnSubmit} />
        <div className="mt-4 d-flex justify-content-center">
          <CustomCard />
        </div>
        <hr />
        <MovieList />
      </Container>
    </div>
  );
}

export default App;
