import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3>Kaviyarasu</h3>

      <p>
        © 2026 Kaviyarasu. All Rights Reserved.
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/skaviyarasu19-hub"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/s-kaviyarasu-98720734a"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}

export default Footer;