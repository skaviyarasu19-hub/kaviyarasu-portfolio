import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>My Skills</h2>
      <p className="skills-subtitle">
        Technologies and tools I use to build modern web applications.
      </p>

      <div className="skill-container">
        <div className="skill-card">
          <h3>🌐 Frontend</h3>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript</p>
          <p>React</p>
        </div>

        <div className="skill-card">
          <h3>💻 Programming</h3>
          <p>C</p>
          <p>Java</p>
          <p>Python (Basics)</p>
        </div>

        <div className="skill-card">
          <h3>🎨 Design</h3>
          <p>UI/UX Design</p>
          <p>Figma</p>
          <p>Responsive Design</p>
        </div>

        <div className="skill-card">
          <h3>🛠 Tools</h3>
          <p>Git</p>
          <p>GitHub</p>
          <p>VS Code</p>
        </div>
      </div>
    </section>
  );
}

export default Skills;