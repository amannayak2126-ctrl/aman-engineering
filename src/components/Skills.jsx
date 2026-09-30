import {
  Cloud,
  Container,
  Network,
  Terminal,
  ShieldCheck,
  Code2,
} from "lucide-react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description: "AWS services and cloud infrastructure fundamentals",
    skills: [
      "EC2",
      "Lambda",
      "CloudWatch",
      "EBS",
      "IAM",
      "VPC",
      "Boto3",
    ],
  },
  {
    icon: Terminal,
    title: "Systems",
    description: "Linux administration and command-line workflows",
    skills: [
      "Linux",
      "CLI",
      "Processes",
      "Permissions",
      "Bash",
      "WSL",
      "Ubuntu",
    ],
  },
  {
    icon: Container,
    title: "Containers & DevOps",
    description: "Containerization and development workflows",
    skills: [
      "Docker",
      "Git",
      "GitHub",
      "DevOps Fundamentals",
    ],
  },
  {
    icon: Network,
    title: "Networking",
    description: "Network infrastructure and troubleshooting",
    skills: [
      "TCP/IP",
      "IPv4 / IPv6",
      "Subnetting",
      "Routing",
      "Switching",
      "VLAN",
      "OSPF",
      "DHCP",
      "DNS",
      "VPN",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Security & Diagnostics",
    description: "Network analysis and technical troubleshooting",
    skills: [
      "Nmap",
      "Troubleshooting",
      "Incident Analysis",
    ],
  },
  {
    icon: Code2,
    title: "Programming & Automation",
    description: "Scripting and practical automation",
    skills: [
      "Python",
      "Automation",
      "Scripting",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">02</span>

          <div>
            <p className="section-eyebrow">SKILLS</p>
            <h2>Engineering toolkit.</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="skill-card"
                key={group.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="skills-footer">
          <span className="skills-footer-prompt">$</span>
          <span>skills --status</span>
          <strong>ACTIVE / LEARNING / BUILDING</strong>
        </div>
      </div>
    </section>
  );
}

export default Skills;