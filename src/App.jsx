import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <section>
        <Home />
      </section>
    </>
  );
}

export default App;
