import styles from "./Home.module.css";
import { motion } from "framer-motion";
const secvar = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const Childvar = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
function Home() {
  return (
    <>
      <motion.section className={styles.section} id="Home">
        <motion.div
          className={styles.container}
          variants={secvar}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className={styles.anim} variants={Childvar}>
            Hello, I'm <span>Omar</span> Soudani
          </motion.h1>
          <motion.p className={styles.anim} variants={Childvar}>
            I build full-stack web solutions with solid architecture, reliable
            performance, and a clear focus on real user needs. My work aims to
            deliver scalable, maintainable systems that provide purposeful and
            seamless experiences.
          </motion.p>
          <motion.a
            className={styles.btn}
            href="#Project"
            variants={Childvar}
            whileHover={{
              boxShadow: "0px 0px 10px 2px #003f67",
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.97 }}
          >
            My Projects
          </motion.a>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Home;
