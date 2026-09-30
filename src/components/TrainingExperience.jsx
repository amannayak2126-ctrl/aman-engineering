import {
  Network,
  ShieldCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

const trainingExperiences = [
  {
    year: "2024",
    type: "CCNA • CISCO",
    title: "CCNA Certification Training",
    organization: "NIST University",
    period: "July 2024 – August 2024",
    icon: Network,

    description:
      "Practical networking training focused on Cisco routing and switching, enterprise networking, connectivity troubleshooting, and network configuration.",

    activities: [
      "Configured Cisco routers and switches using routing and switching concepts.",
      "Performed LAN and WAN connectivity troubleshooting.",
      "Learned Cisco Wireless LAN fundamentals and enterprise wireless concepts.",
      "Studied SD-WAN architecture and basic deployment concepts.",
      "Configured VLANs, STP, DHCP, DNS, NAT and OSPF in simulated enterprise environments.",
      "Created network topology documentation and troubleshooting reports.",
      "Performed network traffic analysis using Wireshark.",
    ],

    skills: [
      "TCP/IP",
      "Routing",
      "Switching",
      "VLAN",
      "STP",
      "DHCP",
      "DNS",
      "NAT",
      "OSPF",
      "WLAN",
      "SD-WAN",
      "Wireshark",
      "Cisco Packet Tracer",
    ],
  },

  {
    year: "2025",
    type: "NETWORK SECURITY",
    title: "Computer Network Security Training",
    organization: "NIST University",
    period: "May 2025 – June 2025",
    icon: ShieldCheck,

    description:
      "Technical network security training focused on secure network operations, traffic analysis, security controls, vulnerability identification, and troubleshooting.",

    activities: [
      "Configured firewall policies and studied access control concepts.",
      "Assisted in identifying network vulnerabilities and connectivity issues.",
      "Gained knowledge of secure network operations and enterprise security practices.",
      "Documented security observations and troubleshooting procedures.",
      "Performed network traffic analysis using Wireshark.",
    ],

    skills: [
      "Network Security",
      "Firewall Policies",
      "Access Control",
      "Wireshark",
      "Vulnerability Analysis",
      "Troubleshooting",
      "Secure Operations",
    ],
  },
];

function TrainingExperience() {
  return (
    <section
      id="training"
      className="experience-section"
    >
      <div className="container">

        <div className="section-heading">
          <span className="section-number">04</span>

          <div>
            <p className="section-eyebrow">
              TRAINING & INTERNSHIP EXPERIENCE
            </p>

            <h2>
              Building technical foundations.
            </h2>
          </div>
        </div>

        <div className="experience-intro">
          <p>
            Practical technical experience across networking,
            infrastructure, troubleshooting, and network security.
          </p>
        </div>

        <div className="experience-list">

          {trainingExperiences.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="experience-item"
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="experience-year">
                  <span>{item.year}</span>

                  <div className="experience-line"></div>
                </div>

                <div className="experience-card">

                  <div className="experience-card-top">

                    <div className="experience-icon">
                      <Icon size={21} />
                    </div>

                    <div className="experience-meta">

                      <span>
                        {item.type}
                      </span>

                      <p>
                        {item.period}
                      </p>

                    </div>

                    <Award
                      className="experience-award"
                      size={19}
                    />

                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <div className="experience-organization">
                    {item.organization}
                  </div>

                  <p className="experience-description">
                    {item.description}
                  </p>

                  <div className="experience-activities">

                    <div className="experience-activities-heading">
                      WORK / TRAINING
                    </div>

                    <ul>
                      {item.activities.map(
                        (activity) => (
                          <li key={activity}>
                            {activity}
                          </li>
                        )
                      )}
                    </ul>

                  </div>

                  <div className="experience-skills">

                    {item.skills.map(
                      (skill) => (
                        <span key={skill}>
                          {skill}
                        </span>
                      )
                    )}

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        <div className="experience-footer">

          <div>
            <span className="experience-footer-prompt">
              $
            </span>

            <span>
              cat /learning-status
            </span>
          </div>

          <strong>
            CONTINUOUSLY BUILDING
          </strong>

          <ArrowUpRight size={16} />

        </div>

      </div>
    </section>
  );
}

export default TrainingExperience;