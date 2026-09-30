import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Terminal,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "amannayak2126@gmail.com",
    href: "mailto:amannayak2126@gmail.com",
  },
  {
    icon: Phone,
    label: "PHONE",
    value: "+91 8984445278",
    href: "tel:+918984445278",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Bhubaneswar, Odisha",
    href: null,
  },
];

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">06</span>

          <div>
            <p className="section-eyebrow">CONTACT</p>
            <h2>Let's connect.</h2>
          </div>
        </div>

        <div className="contact-layout">
          <motion.div
            className="contact-intro"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <h3>
              Open to opportunities in
              <span> cloud, DevOps & infrastructure.</span>
            </h3>

            <p>
              I'm interested in entry-level opportunities where I can work
              with cloud infrastructure, Linux systems, networking,
              automation and modern DevOps practices.
            </p>

            <div className="contact-terminal">
              <div className="contact-terminal-header">
                <Terminal size={14} />
                <span>aman@devops:~</span>
              </div>

              <div className="contact-terminal-body">
                <div>
                  <span className="terminal-prompt">$</span>
                  <span>availability</span>
                </div>

                <strong>OPEN TO OPPORTUNITIES</strong>

                <div className="contact-cursor">
                  <span className="terminal-prompt">$</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="contact-details">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              const content = (
                <>
                  <div className="contact-icon">
                    <Icon size={19} />
                  </div>

                  <div className="contact-item-content">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>

                  {item.href && (
                    <ArrowUpRight
                      className="contact-arrow"
                      size={17}
                    />
                  )}
                </>
              );

              return (
                <motion.div
                  className="contact-item"
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                >
                  {item.href ? (
                    <a href={item.href}>{content}</a>
                  ) : (
                    <div>{content}</div>
                  )}
                </motion.div>
              );
            })}

            <div className="contact-socials">
              <a
                href="https://github.com/amannayak2126-ctrl"
                target="_blank"
                rel="noreferrer"
              >
                <Code2 size={18} />
                GitHub
                <ArrowUpRight size={15} />
              </a>

              <a
                href="https://linkedin.com/in/aman-kumar-nayak-4974b5289"
                target="_blank"
                rel="noreferrer"
              >
                <BriefcaseBusiness size={18} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;