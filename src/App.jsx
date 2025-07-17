import Header from "./component/Header";
import About from "./component/About";
import Technology from "./component/Technology";
import Contact from "./component/Contact";
import Projects from "./component/Projects";
import Photography from "./component/Photography";
import Footer from "./component/UI/Footer";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
