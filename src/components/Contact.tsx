import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">

      <h2>Contact Me</h2>

      <p className="contact-subtitle">
        Let's connect and build something amazing together.
      </p>

      <div className="contact-container">

        <div className="contact-card">
          <h3>📧 Email</h3>
          <a href="mailto:skaviyarasu19@gmail.com">
            skaviyarasu19@gmail.com
          </a>
        </div>

        <div className="contact-card">
          <h3>💻 GitHub</h3>
          <a
            href="https://github.com/skaviyarasu19-hub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>

        <div className="contact-card">
          <h3>🔗 LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/s-kaviyarasu-98720734a"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;