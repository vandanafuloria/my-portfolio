import Header from "./component/Header";
import About from "./component/About";
import Technology from "./component/Technology";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Photography from "./component/Photography";

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
