import { Routes, Route } from "react-router-dom";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/career" element={<Career />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/education" element={<Education />} />

        <Route path="/projects" element={<Project />} />

      </Routes>
    </>
  );
}

export default App;
