import {
  ArrowDown,
  ArrowUpRight,
  Terminal,
} from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="status-dot"></span>
            DEVOPS • CLOUD • INFRASTRUCTURE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Aman Kumar
            <span>Nayak.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Building practical cloud infrastructure, automation and
            monitoring solutions using AWS, Linux, Docker, Python and modern
            DevOps practices.
          </motion.p>

          <motion.div
            className="hero-tech"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span>AWS</span>
            <span>Linux</span>
            <span>Docker</span>
            <span>Git</span>
            <span>Python</span>
            <span>Networking</span>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="button button-primary">
              View Projects
              <ArrowDown size={17} />
            </a>

            <a
              href="https://github.com/amannayak2126-ctrl"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              GitHub
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="terminal-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="terminal-glow"></div>

          <div className="terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="terminal-title">
                <Terminal size={14} />
                aman@devops:~
              </div>

              <div className="terminal-spacer"></div>
            </div>

            <div className="terminal-body">
              <div className="terminal-line">
  <span className="terminal-prompt">$</span>
  <span>capabilities</span>
</div>

<div className="terminal-output stack-output">
  <span>AWS</span>
  <span>Linux</span>
  <span>Docker</span>
  <span>Git</span>
  <span>Python</span>
</div>

<div className="terminal-line terminal-gap">
  <span className="terminal-prompt">$</span>
  <span>focus</span>
</div>

<div className="terminal-output">
  CLOUD • AUTOMATION • INFRASTRUCTURE
</div>

<div className="terminal-line terminal-gap">
  <span className="terminal-prompt">$</span>
  <span>status</span>
</div>

<div className="terminal-status">
  <span className="status-dot"></span>
  SYSTEM READY
</div>

<div className="terminal-cursor">
  <span>$</span>
  <span className="cursor"></span>
</div>
            </div>
          </div>

          <div className="terminal-decoration decoration-one"></div>
          <div className="terminal-decoration decoration-two"></div>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={15} />
      </a>

      <div className="hero-grid"></div>
    </section>
  );
}

export default Hero;