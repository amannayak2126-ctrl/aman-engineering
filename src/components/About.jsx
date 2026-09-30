import {
  Cloud,
  GraduationCap,
  Server,
  TerminalSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const aboutStats = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech • CSE",
    detail: "Graduated 2026",
  },
  {
    icon: Cloud,
    label: "Cloud",
    value: "AWS",
    detail: "EC2 • Lambda • CloudWatch",
  },
  {
    icon: Server,
    label: "Infrastructure",
    value: "Linux • Docker",
    detail: "Systems & containers",
  },
  {
    icon: TerminalSquare,
    label: "Engineering",
    value: "Python • Git",
    detail: "Automation & workflows",
  },
];

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">01</span>

          <div>
            <p className="section-eyebrow">ABOUT</p>
            <h2>Infrastructure-minded.</h2>
          </div>
        </div>

        <div className="about-grid">
          <motion.div
            className="about-copy"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              Building practical systems with
              <span> cloud, automation and infrastructure.</span>
            </h3>

            <p>
              I'm Aman Kumar Nayak, a Computer Science & Engineering graduate
              focused on cloud infrastructure, Linux systems, networking and
              DevOps practices.
            </p>

            <p>
              I enjoy turning technical concepts into practical projects
              from AWS serverless monitoring and cost-optimization workflows
              to network diagnostics and infrastructure tooling.
            </p>

            <div className="about-terminal">
              <span className="about-terminal-prompt">$</span>
              <span>cat /focus</span>
              <span className="about-terminal-value">
                CLOUD • AUTOMATION • INFRASTRUCTURE
              </span>
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {aboutStats.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-card" key={item.label}>
                  <div className="about-card-icon">
                    <Icon size={19} />
                  </div>

                  <div className="about-card-content">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                    <small>{item.detail}</small>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;