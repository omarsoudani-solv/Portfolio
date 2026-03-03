import styles from "./GenSkillCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const cardvar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
function GenSkillCard({ icon, title, content }) {
  return (
    <>
      <motion.div
        className={styles.card}
        whileHover={{
          y: -6,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.35)",
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        variants={cardvar}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={styles.title}>
          <div>
            <FontAwesomeIcon icon={icon} className={styles.icon} />
          </div>
          <h3>{title}</h3>
        </div>
        <div className={styles.def}>
          <p>{content}</p>
        </div>
      </motion.div>
    </>
  );
}

export default GenSkillCard;
