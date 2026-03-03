import styles from "./ProjCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
const imgdivvar = {
  hidden: {},
  visible: {},
};
const imgdivchildvar = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 10,
    transition: { duration: 0.2, ease: "easeOut" },
  },
};
const cardvar1 = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const cardvar2 = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};
const cardvar3 = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};
function ProjCard({ index, img, title, skills, desc }) {
  return (
    <>
      <motion.div
        id={index}
        className={styles.card}
        variants={index === 0 ? cardvar2 : index === 1 ? cardvar3 : cardvar1}
      >
        <motion.div
          className={styles.img}
          variants={imgdivvar}
          whileHover={"visible"}
        >
          <img src={img} alt={`Img for ${title}`} />
          <motion.h4 variants={imgdivchildvar}>Project Description</motion.h4>
          <motion.p variants={imgdivchildvar}> {desc}</motion.p>
        </motion.div>
        <div className={styles.info}>
          <h4>{title}</h4>
          <div className={styles.tools}>
            {skills.map((elem, index) => {
              return (
                <div key={`${index}-${elem}`}>
                  <p>{elem}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.icns}>
          <div>
            <FontAwesomeIcon icon={faShareFromSquare} className={styles.icn} />
          </div>
          <div>
            <FontAwesomeIcon icon={faGithub} className={styles.icn} />
          </div>
        </div>
      </motion.div>
    </>
  );
}
export default ProjCard;
