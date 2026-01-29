import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Header.css";

function Header() {
  const [mode, setMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const navigate=useNavigate();

  const changing = () => {
    setMode(!mode);
    document.body.classList.toggle("dark");
  };
  const btnHome=(e)=>{
    e.preventDefault();
    navigate("/");
    setOpenMenu(false);
  }
  const btnSkills=(e)=>{
    e.preventDefault();
    navigate("/technical");
    setOpenMenu(false);

  }
  const btnProject=(e)=>{
    e.preventDefault();
    navigate("/project");
    setOpenMenu(false);

  }
  const btnEducation=(e)=>{
    e.preventDefault();
    navigate("/education");
    setOpenMenu(false);

  }
  const btnAbout=(e)=>{
    e.preventDefault();
    navigate("/aboutme");
    setOpenMenu(false);

  }

  return (
    <>
      <div className="header-container">
        <div className="username">
          <h1>Janagan L</h1>
          <p>Java Full Stack Developer</p>
        </div>
        <div className="menu-btn" onClick={() => setOpenMenu(!openMenu)}>
          ☰
        </div>
        <nav className={`navlist ${openMenu ? "show" : ""}`}>
          <p onClick={btnHome}>Home</p>
          <p onClick={btnSkills}>Skills</p>
          <p onClick={btnProject}>Project</p>
          <p onClick={btnEducation}>Education</p>
          <p onClick={btnAbout}>About</p>
          <div className="toggle-box">
            <span className="mode-name">{mode ? "Dark" : "Light"}</span>
            <label className="switch">
              <input type="checkbox" onChange={changing} />
              <span className="slider round"></span>
            </label>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
