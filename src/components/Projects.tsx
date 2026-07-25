import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <p className="projects-subtitle">
        Here are some of the projects I have built.
      </p>

      <div className="project-container">

        <div className="project-card">
          <h3>🌐 AI Portfolio</h3>
          <p>
            A modern responsive portfolio website built with React and CSS.
          </p>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>🎬 Netflix UI Clone</h3>
          <p>
            A Netflix-inspired landing page created using HTML, CSS and JavaScript.
          </p>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>🤖 BrainCode AI</h3>
          <p>
            An AI-based learning project developed during my internship.
          </p>

          <div className="project-buttons">
            <a href="#" target="_blank" rel="noreferrer">Live Demo</a>
            <a href="#" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;