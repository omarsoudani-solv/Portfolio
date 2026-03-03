import styles from "./PubSkills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faReact, faPhp } from "@fortawesome/free-brands-svg-icons";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faC } from "@fortawesome/free-solid-svg-icons/faC";
import SkillCard from "./SkillCard/SkillCard";
import { motion } from "framer-motion";
const skills = [
  { icon: faReact, name: "React.js" },
  { icon: faJs, name: "Vanilla JS" },
  { icon: faWind, name: "Taiwlind CSS" },
  { icon: faPhp, name: "PHP" },
  { icon: faDatabase, name: "MySql" },
  { icon: faC, name: "C Language" },
];
const parentvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.5 } },
};
const parentcardvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const titlevar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
function GenSkills() {
  return (
    <>
      {/* Technical Stack */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.title}
            variants={parentvar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={titlevar}>
              Technical <span>Stack</span>
            </motion.h2>
            <motion.p variants={titlevar}>
              My favorite technologies for turning ideas into reality
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.content}
            variants={parentcardvar}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {skills.map((elem, index) => {
              return (
                <SkillCard
                  key={`${index}-${elem.name}`}
                  icon={elem.icon}
                  name={elem.name}
                />
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
export default GenSkills;
