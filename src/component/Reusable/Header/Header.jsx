import { useState } from "react";
import "./Header.css";

function Header() {
  const [mode, setMode] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const changing = () => {
    setMode(!mode);
    document.body.classList.toggle("dark");
  };

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
          <p>Home</p>
          <p>Skills</p>
          <p>Project</p>
          <p>Education</p>
          <p>About</p>
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
