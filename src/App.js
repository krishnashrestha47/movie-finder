import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/CustomCard";
import { MovieList } from "./components/MovieList";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <SearchForm />
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
