import styles from "./PaperSkill.module.css";
import ElemPaper from "./ElemPaper/ElemPaper";
import { motion } from "framer-motion";
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
const papervar = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", when: "beforeChildren" },
  },
};
const skillsparentvar = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
function PaperSkill({ title, skills, width }) {
  return (
    <>
      <motion.div
        className={styles.paper}
        variants={papervar}
        /*         inherit={width < 1100 ? false : true}
        initial={width < 1100 ? "hidden" : undefined}
        whileInView={width < 1100 ? "visible" : undefined}
        viewport={{ once: true, amount: 0.2 }} */
      >
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
        <motion.div className={styles.skills} variants={skillsparentvar}>
          {skills.map((elem, index) => {
            return (
              <ElemPaper
                key={`${index}-${elem.name}`}
                icon={elem.icon}
                name={elem.name}
                advprce={elem.advprce}
                exp={elem.exp}
              />
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
}
export default PaperSkill;
