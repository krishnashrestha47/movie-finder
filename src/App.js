import { Container } from "react-bootstrap";
import "./App.css";
import { CustomCard } from "./components/CustomCard";
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
        <div>movie listing area</div>
      </Container>
    </div>
  );
}

export default App;
