import { GraduationCap, School, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const education = [
  {
    icon: GraduationCap,
    level: "BACHELOR'S DEGREE",
    title: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    institution: "NIST University, Berhampur",
    period: "Graduated 2026",
    result: "CGPA 7.21",
  },
  {
    icon: School,
    level: "SENIOR SECONDARY",
    title: "Intermediate",
    field: "Science",
    institution: "Takshashila Residential School, Berhampur",
    period: "Completed 2022",
    result: "75%",
  },
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-number">05</span>

          <div>
            <p className="section-eyebrow">EDUCATION</p>
            <h2>Academic foundation.</h2>
          </div>
        </div>

        <div className="education-list">
          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="education-card"
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <div className="education-icon">
                  <Icon size={24} />
                </div>

                <div className="education-main">
                  <span className="education-level">
                    {item.level}
                  </span>

                  <h3>{item.title}</h3>

                  <p className="education-field">
                    {item.field}
                  </p>

                  <p className="education-institution">
                    {item.institution}
                  </p>

                  <div className="education-meta">
                    <span>
                      <CalendarDays size={14} />
                      {item.period}
                    </span>

                    <strong>{item.result}</strong>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="education-terminal">
          <span className="education-terminal-prompt">$</span>
          <span>education --status</span>
          <strong>COMPLETED</strong>
        </div>
      </div>
    </section>
  );
}

export default Education;