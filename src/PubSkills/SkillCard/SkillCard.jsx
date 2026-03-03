import styles from "./SkillCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const cardvar = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stylesHover = {
  backgroundColor: "var(--ligth-second-color)",
  border: "2px solid var(--second-color)",
  transition: { duration: 0.5, ease: "easeOut" },
};
function SkillCard({ icon, name }) {
  return (
    <>
      <motion.div
        className={styles.card}
        whileHover={{
          backgroundColor: "var(--ligth-second-color)",
          borderColor: "var(--second-color)",
          transition: { duration: 0.5, ease: "easeOut" },
        }}
        variants={cardvar}
      >
        <FontAwesomeIcon icon={icon} className={styles.icn} />
        <motion.h4>{name}</motion.h4>
      </motion.div>
    </>
  );
}
export default SkillCard;
