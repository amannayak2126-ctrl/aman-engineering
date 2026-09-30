import {
  ArrowUpRight,
  Cloud,
  Network,
  Server,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    featured: true,
    icon: Cloud,
    category: "AWS • CLOUD • MONITORING",
    title: "AWS CostGuard",
    description:
      "A serverless AWS resource monitoring and cost-optimization scanner built to identify potentially wasteful cloud resources and make infrastructure easier to monitor.",
    stack: [
      "Python",
      "Boto3",
      "AWS Lambda",
      "CloudWatch",
      "EC2",
      "EBS",
      "Slack",
    ],
    highlights: [
      "Scans EC2 instances and identifies low CPU utilization.",
      "Discovers EBS volumes and reports attachment status.",
      "Identifies Elastic IP addresses not associated with an instance.",
      "Retrieves EC2 CPU metrics through CloudWatch.",
      "Sends scan summaries to Slack.",
      "Designed as a read-only resource discovery system.",
    ],
    github:
      "https://github.com/amannayak2126-ctrl/aws-costguard",
  },
  {
    number: "02",
    featured: false,
    icon: Network,
    category: "PYTHON • NETWORKING • DIAGNOSTICS",
    title: "Python Network Scanner",
    description:
      "A Python-based network scanning tool designed for host discovery, TCP port scanning and practical network diagnostics.",
    stack: [
      "Python",
      "Socket Programming",
      "Multithreading",
      "TCP/IP",
      "Subnetting",
    ],
    highlights: [
      "Performs host discovery across network ranges.",
      "Scans TCP ports using socket programming.",
      "Uses multithreading to improve scanning efficiency.",
      "Generates structured scan reports.",
      "Supports practical network diagnostics.",
    ],
    github: null,
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">03</span>

          <div>
            <p className="section-eyebrow">PROJECTS</p>
            <h2>Things I've built.</h2>
          </div>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                className={`project-card ${
                  project.featured ? "project-featured" : ""
                }`}
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="project-top">
                  <div className="project-number">
                    {project.number}
                  </div>

                  <div className="project-category">
                    <span className="project-status-dot"></span>
                    {project.category}
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-link"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                <div className="project-main">
                  <div className="project-info">
                    <div className="project-icon">
                      <Icon size={24} />
                    </div>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    <div className="project-stack">
                      {project.stack.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-details">
                    <div className="project-details-heading">
                      <Server size={16} />
                      <span>IMPLEMENTATION</span>
                    </div>

                    <ul>
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="project-footer">
                  <div>
                    <ShieldCheck size={15} />
                    <span>
                      {project.featured
                        ? "READ-ONLY RESOURCE DISCOVERY"
                        : "NETWORK DIAGNOSTICS"}
                    </span>
                  </div>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      VIEW REPOSITORY
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;