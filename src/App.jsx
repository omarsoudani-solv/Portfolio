import "./App.css";
import { useState, useEffect } from "react";
import ShowNavbar from "./Navbar/ShowNavbar";
import Home from "./Home/Home";
import About from "./About/About";
import PubSkills from "./PubSkills/PubSkills";
import Skill from "./Skill/Skill";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
const list = ["Home", "About", "Skills", "Project", "Contact"];
function App() {
  const [screenWidth, setScreenWidth] = useState(screen.width);
  useEffect(() => {
    const UpdateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", UpdateWidth);
    return () => {
      window.removeEventListener("resize", UpdateWidth);
    };
  }, []);
  return (
    <>
      <ShowNavbar list={list} />
      <Home />
      <About />
      <PubSkills />
      <Skill width={screenWidth} />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
