import styles from "./About.module.css";
import GenSkillCard from "./GenSkillCard/GenSkillCard";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faPuzzlePiece } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
const skillcard = [
  {
    icon: faLaptopCode,
    title: "Web Development",
    content:
      "I develop refined web applications with strong structure and smooth experience, using React, PHP, and MySQL to build scalable, practical solutions.",
  },
  {
    icon: faPuzzlePiece,
    title: "Problem Solving",
    content:
      "I solve problems through precise logical analysis—breaking issues to their roots and crafting clear, efficient, and simplified solutions.",
  },
  {
    icon: faTasks,
    title: "Project Management",
    content:
      "I manage projects with structured planning and clear vision—organizing tasks, controlling timelines, and ensuring precise, consistent execution.",
  },
];
const title =
  "I work on the web with a balance of structure and creativity —building digital spaces that are smooth, fast, and pleasant to explore.";
const p1 =
  "I’m a Computer Science student with over 2.5 years ofexperience building web applications using React.js, PHP, and MySQL. I focus on transforming ideas into efficient, user-centric solutions.";
const p2 =
  "My background in low-level programming gives me a deep understanding of system fundamentals, which guides my technical decisions and attention to critical details. I believe clean architecture and readable code are the foundation of scalable, dependable digital experiences.";
const parentvar = {
  hidden: {},
  visible: {},
};
const titlevar = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
const contvar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const parentexttvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.01 } },
};
const textvar = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};
const btnvar = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};
function About() {
  return (
    <>
      <section className={styles.section} id="About">
        <div className={styles.container}>
          <motion.div
            className={styles.title}
            variants={parentvar}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={titlevar}>
              About <span>Me</span>
            </motion.h2>
          </motion.div>
          <div className={styles.content}>
            <div className={styles.soucontent1}>
              <motion.div
                className={styles.ctlcnt}
                variants={parentexttvar}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.h3>
                  {title.split("").map((elem, index) => {
                    return (
                      <motion.span key={`${index}-${elem}`} variants={textvar}>
                        {elem}
                      </motion.span>
                    );
                  })}
                </motion.h3>
                <motion.p>
                  {title.split("").map((elem, index) => {
                    return (
                      <motion.span key={`${index}-${elem}`} variants={textvar}>
                        {elem}
                      </motion.span>
                    );
                  })}
                </motion.p>
                <motion.p>
                  {title.split("").map((elem, index) => {
                    return (
                      <motion.span key={`${index}-${elem}`} variants={textvar}>
                        {elem}
                      </motion.span>
                    );
                  })}
                </motion.p>
                <div className={styles.btns}>
                  <motion.button className={styles.button} variants={btnvar}>
                    <motion.a
                      style={{ color: "var(--text-color)" }}
                      whileHover={{
                        color: "var(--second-color)",
                        transition: { duration: 0.5, ease: "easeOut" },
                      }}
                      href="#Contact"
                    >
                      Contact Me
                    </motion.a>
                  </motion.button>
                  <motion.button
                    className={`${styles.button} ${styles.btn2}`}
                    variants={btnvar}
                  >
                    Download CV
                  </motion.button>
                </div>
              </motion.div>
            </div>
            <div className={styles.soucontent2}>
              {skillcard.map((elem, index) => {
                return (
                  <GenSkillCard
                    key={`${index}-${elem.title}`}
                    icon={elem.icon}
                    title={elem.title}
                    content={elem.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;
