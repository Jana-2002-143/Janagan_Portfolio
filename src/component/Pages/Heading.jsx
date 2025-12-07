import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import '../CSS/Heading.css';

function Heading() {
  return (
    <div className="Heading">
      <h1 className="myname">JANAGAN L</h1>
      <h2>Java Full-Stack Developer</h2>
      <p className="summary">
        I am a passionate full-stack developer specializing in React, Spring
        Boot, and REST API development. I enjoy building clean, user-friendly
        interfaces and robust backend systems. My projects focus on real-world
        functionality such as authentication, e-commerce workflows, secure
        payment handling, and efficient data management. I continuously improve
        my skills through hands-on development and problem-solving, and I enjoy
        turning ideas into complete, polished applications.
      </p>
      <div className="myaddress">
        <a href="#">
          <FaLocationDot className="iconsize" /> Pudukkottai,Tamilnadu,India{" "}
        </a>
        <a href="#">
          <FaPhoneAlt className="iconsize" /> +91 9943653771{" "}
        </a>
        <a href="mailto:janaganjkl930@gmail.com" className="firstemail">
          <MdEmail className="iconsize" /> janaganjkl930@gmail.com{" "}
        </a>
      </div>
      <div className="mywebsites">
        <a
          className="github"
          href="https://github.com/Jana-2002-143"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="iconsize" />
          Github
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/janagan-l-570322339"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="iconsize" />
          LinkedIn
        </a>
        <a
          className="contact"
          href="mailto:janaganl1011@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail className="iconsize" />
          Contact Me
        </a>
      </div>
    </div>
  );
}
export default Heading;
