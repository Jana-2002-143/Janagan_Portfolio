import Heading from "./component/Pages/Heading.jsx";
import Technical from "./component/Pages/Technical.jsx";
import Project from "./component/Pages/Project.jsx";
import Education from "./component/Pages/Education.jsx";
import Aboutme from "./component/Pages/Aboutme.jsx";
import Header from "./component/Reusable/Headerpage/Header.jsx";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <br />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Heading />} />
        <Route path="/technical" element={<Technical />} />
        <Route path="/project" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </>
  );
}

export default App;
