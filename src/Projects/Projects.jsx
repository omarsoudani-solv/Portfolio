import styles from "./Projects.module.css";
import ProjCard from "./ProjCard/ProjCard";
import proj1 from "../Imgs/ProjImg/Dashboard.webp";
import proj2 from "../Imgs/ProjImg/ecommerce.webp";
import proj3 from "../Imgs/ProjImg/portfolio2.webp";
import { motion } from "framer-motion";
const projs = [
  {
    img: proj3,
    title: "Portfolio Website",
    skills: ["HTML5", "CSS3", "Vanilla JS"],
    desc: "Modern personal showcase highlighting creative web development and technical expertise.",
  },
  {
    img: proj2,
    title: "E-Commerce Website",
    skills: ["React.js", "Framer-motion", "PHP", "MySql"],
    desc: "Vibrant online store offering fresh organic juices with seamless checkout.",
  },
  {
    img: proj1,
    title: "Dadhboard",
    skills: ["React.js", "Framer-motion"],
    desc: "Dynamic data visualization platform for tracking revenue and business performance.",
  },
];
const parentvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const tltvar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const parentcardvar = {
  hidden: {},
  visible: {},
};
function Projects() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div
            className={styles.title}
            id="Project"
            variants={parentvar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={tltvar}>
              <span>My</span> Projects
            </motion.h2>
            <motion.p variants={tltvar}>
              High-Performance Apps, Optimized for Maximum Efficiency. 🚀⚡
            </motion.p>
          </motion.div>
          <motion.div
            className={styles.content}
            variants={parentcardvar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >
            {projs.map((elem, index) => {
              return (
                <ProjCard
                  key={`${index}-${elem.title}`}
                  index={index}
                  img={elem.img}
                  title={elem.title}
                  skills={elem.skills}
                  desc={elem.desc}
                />
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
export default Projects;
