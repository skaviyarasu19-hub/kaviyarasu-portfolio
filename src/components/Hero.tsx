import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <img
        src="/KAVIIII.jpeg"
        alt="Kaviyarasu"
        className="profile-image"
      />

      <div className="hero-content">
        <h1>
          Hi, I'm <span>Kaviyarasu</span>
        </h1>

        <h2>Frontend Developer | UI/UX Designer</h2>

        <p>
          I create modern websites using React, HTML, CSS and JavaScript.
          I love building beautiful, responsive and user-friendly websites.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>View Projects</button>
          </a>

          <a href="/Resume.pdf" download>
            <button>Download Resume</button>
          </a>

          <a href="#contact">
            <button>Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;