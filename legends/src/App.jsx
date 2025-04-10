import Container from "react-bootstrap/Container";
import Header from "./components/header/Header";
import LegendContainer from "./legends/LegendContainer";

function App() {
  return (
    <Container>
      <Header/>
      <LegendContainer/>
    </Container>
  );
}

export default App;
