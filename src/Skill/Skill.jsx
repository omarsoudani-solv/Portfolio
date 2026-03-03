import styles from "./Skill.module.css";
import PaperSkill from "./PaperSkill/PaperSkill";
import {
  faHtml5,
  faJs,
  faReact,
  faPhp,
  faGitAlt,
  faGithub,
  faCss,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faLaptopCode,
  faC,
} from "@fortawesome/free-solid-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons/faWind";
import { faPallet } from "@fortawesome/free-solid-svg-icons/faPallet";
import { motion } from "framer-motion";
const parentvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};
const cntvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const titlevar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const skills = [
  {
    title: "Front end Devlopment",
    tools: [
      { icon: faHtml5, name: "Html5", exp: "4 years", advprce: 90 },
      { icon: faCss, name: "CSS3", exp: "4 years", advprce: 90 },
      { icon: faJs, name: "Vanilla JS", exp: "3 years", advprce: 75 },
      { icon: faReact, name: "React.js", exp: "2 years", advprce: 80 },
      { icon: faWind, name: "Taiwlind CSS", exp: "1 year", advprce: 70 },
      { icon: faPallet, name: "Framer-Motion", exp: "1 year", advprce: 51 },
    ],
  },
  {
    title: "Back end Devlopment",
    tools: [
      { icon: faPhp, name: "PHP", exp: "1 year", advprce: 70 },
      { icon: faC, name: "C Language", exp: "2 years", advprce: 80 },
      { icon: faDatabase, name: "MySQL", exp: "1 year", advprce: 51 },
    ],
  },
  {
    title: "Tolls & Others",
    tools: [
      { icon: faGitAlt, name: "Git", exp: "1 year", advprce: 51 },
      { icon: faGithub, name: "Git hup", exp: "3 years", advprce: 80 },
      { icon: faLaptopCode, name: "VS Code", exp: "4 years", advprce: 90 },
    ],
  },
];
function Skill({ width }) {
  return (
    <>
      <section className={styles.section} id="Skills">
        <div className={styles.container}>
          <motion.div
            className={styles.title}
            variants={parentvar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={titlevar}>
              Skills <span>&</span> Technologies
            </motion.h2>
            <motion.p variants={titlevar}>
              Everything I use to deliver high-quality web solutions.
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.content}
            variants={cntvar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {skills.map((elem, index) => {
              return (
                <PaperSkill
                  key={`${index}-${elem.title}`}
                  title={elem.title}
                  skills={elem.tools}
                  width={width}
                />
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
export default Skill;
