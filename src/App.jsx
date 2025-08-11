import "./App.css";
import { Nav } from "./components/Nav";
import { AboutMe } from "./pages/AboutMe";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Nav />
      <section className="home-section">
        <Home />
      </section>
      <section className="aboutme-section">
        <AboutMe />
      </section>
    </>
  );
}

export default App;
