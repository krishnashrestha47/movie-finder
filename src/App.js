import { Container } from "react-bootstrap";
import "./App.css";
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="wrapper">
      <Container>
        <SearchForm />

        <hr />
        <div>movie listing area</div>
      </Container>
    </div>
  );
}

export default App;
