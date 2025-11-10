import Heading from './component/Heading.jsx'
import Technical from './component/Technical.jsx'
import Project from './component/Project.jsx'
import Education from './component/Education.jsx'
import Aboutme from './component/Aboutme.jsx'
import './App.css'
import { MdEmail } from "react-icons/md";
import { FaLinkedin ,FaPhoneAlt,FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";


function App() {


  return (
    <>
      <div className="app-container">
  <Heading />
  <Technical />
  <Project />
  <Education />
  <Aboutme />
</div>
    </>
  )
}

export default App
