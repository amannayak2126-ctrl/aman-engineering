import {
  Code2,
  BriefcaseBusiness,
  ArrowUpRight,
} from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              <span className="brand-mark">A</span>
              <span>AMAN</span>
            </a>

            <p>
              DEVOPS • CLOUD • INFRASTRUCTURE
            </p>
          </div>

          <div className="footer-stack">
            <span>AWS</span>
            <span>LINUX</span>
            <span>DOCKER</span>
            <span>PYTHON</span>
            <span>NETWORKING</span>
          </div>

          <div className="footer-links">
            <a
              href="https://github.com/amannayak2126-ctrl"
              target="_blank"
              rel="noreferrer"
            >
              <Code2 size={16} />
              GitHub
              <ArrowUpRight size={13} />
            </a>

            <a
              href="https://linkedin.com/in/aman-kumar-nayak-4974b5289"
              target="_blank"
              rel="noreferrer"
            >
              <BriefcaseBusiness size={16} />
              LinkedIn
              <ArrowUpRight size={13} />
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Aman Kumar Nayak
          </span>

          <span className="footer-status">
            <span className="status-dot"></span>
            SYSTEM ONLINE
          </span>

          <span>
            Built with React • Vite
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;