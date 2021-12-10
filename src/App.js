import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import { Container } from "./styles/Container";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Container>
        <Pokemons />
      </Container>
    </div>
  );
}

export default App;
