import Nav from "./components/navbar/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skillset from "./components/Skillset/Skillset";
import Projects from "./components/projects/Projects";
import Contact from "./components/cantact/Contact";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/skillset" element={<Skillset />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
