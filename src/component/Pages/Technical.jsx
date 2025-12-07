import '../CSS/Technical.css';
function Technical() {
  return (
    <div className="Technical">
      <div className="psummary">
      </div>
      <h1 className="tech">Technical Skills</h1>
      <p className="techsummary">
        A comprehensive toolkit for building modern, scalable web applications
      </p>

      <div className="techtools">

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

        <div className="skillcard">
          <h3 className="toolname">Version Control</h3>
          <p className="toolsummary">Core technologies and tools</p>
          <div className="skilllist">
            <span className="skillname">Git</span>
            <span className="skillname">GitHub</span>
          </div>
        </div>
        
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
