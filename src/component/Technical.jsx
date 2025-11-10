import './Technical.css'
function Technical() {
  return (
    <div className="Technical">
      {/* Professional Summary */}
      <div className="psummary">
        <h2 className='psummarytitle'>Professional Summary</h2>
        <p className="professionalpara">
          Enthusiastic and committed Java Full Stack Developer with hands-on
          experience in building static websites using HTML and CSS. Skilled in
          Java programming and software development fundamentals. Strong
          interest in web development and learning new technologies. Eager to
          contribute to software teams with dedication and quick adaptability.
        </p>
      </div>
      <h1 className="tech">Technical Skills</h1>
      <p className="techsummary">
        A comprehensive toolkit for building modern, scalable web applications
      </p>

      <div className="techtools">

        {/* Frontend */}
        <div className="skillcard">
          <h3 className="toolname">Front End</h3>
          <p className="toolsummary">Core technologies and tools</p>
          <div className="skilllist">
            <span className="skillname">HTML</span>
            <span className="skillname">CSS</span>
            <span className="skillname">JavaScript</span>
            <span className="skillname">React.js</span>
          </div>
        </div>

        {/* Backend */}
        <div className="skillcard">
          <h3 className="toolname">Backend</h3>
          <p className="toolsummary">Core technologies and tools</p>
          <div className="skilllist">
            <span className="skillname">Java</span>
            <span className="skillname">Python</span>
            <span className="skillname">SpringBoot</span>
            <span className="skillname">RestApi</span>
          </div>
        </div>

        {/* Version Control */}
        <div className="skillcard">
          <h3 className="toolname">Version Control</h3>
          <p className="toolsummary">Core technologies and tools</p>
          <div className="skilllist">
            <span className="skillname">Git</span>
            <span className="skillname">GitHub</span>
          </div>
        </div>

        {/* Tools */}
        <div className="skillcard">
          <h3 className="toolname">Tools</h3>
          <p className="toolsummary">Core technologies and tools</p>
          <div className="skilllist">
            <span className="skillname">Visual Studio Code</span>
            <span className="skillname">Eclipse</span>
            <span className="skillname">Intellij Idea</span>
            <span className="skillname">Maven</span>
            <span className="skillname">Postman</span>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Technical;
