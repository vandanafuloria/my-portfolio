import Header from "./compnent/Header";
import About from "./compnent/About";
import Technology from "./compnent/Technology";
import Contact from "./compnent/Contact";
import Projects from "./compnent/Projects";
import Photography from "./compnent/Photography";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <About />
        <Technology />
        <Projects />
        <Photography />

        <Contact />
      </div>
    </>
  );
}

export default App;
