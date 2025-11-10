import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";
import './heading.css'

function Heading() {
  return (
    <div className="Heading">
      <h1 className="myname">JANAGAN L</h1>
      <h2>Java Full-Stack Developer</h2>
      <p className="summary">
        Enthusiastic developer with hands-on experience in building responsive
        web applications. Passionate about creating innovative solutions using
        modern technologies.
      </p>
      <div className="myaddress">
        <p>
          <FaLocationDot className="iconsize" /> Pudukkottai,Tamilnadu,India{" "}
        </p>
        <p>
          <FaPhoneAlt className="iconsize" /> +91 9943653771{" "}
        </p>
        <a href="mailto:janaganjkl930@gmail.com" className="firstemail">
          <MdEmail className="iconsize" /> janaganjkl930@gamil.com{" "}
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
