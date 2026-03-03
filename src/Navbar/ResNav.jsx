import styles from "./Navbar.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function ResNav({ list }) {
  const ShowResNav = (boolean) => {
    if (boolean) {
      return (
        <div className={styles.ResNav}>
          <ul className={styles.ul}>
            {list.map((elem, index) => {
              return (
                <li key={index}>
                  <a
                    href={`#${elem}`}
                    style={{ "--i": index }}
                    className={styles.a}
                  >
                    {elem}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };
  const [show, setShow] = useState(false);
  const iconListvar = {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.175, 0.885, 0.32, 1.275],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };
  const MotionIcon = motion.create(FontAwesomeIcon);
  return (
    <>
      <header className={styles.header}>
        <p>
          <a href="#Home" className={styles.logo}>
            Omar
          </a>
        </p>
        <div className={styles.listicon}>
          <AnimatePresence mode="wait">
            {!show ? (
              <MotionIcon
                variants={iconListvar}
                initial="hidden"
                animate="visible"
                exit="exit"
                icon={faList}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              />
            ) : (
              <MotionIcon
                variants={iconListvar}
                initial="hidden"
                animate="visible"
                exit="exit"
                icon={faXmark}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShow((prev) => !prev);
                }}
              />
            )}
          </AnimatePresence>
        </div>
      </header>
      {ShowResNav(show)}
    </>
  );
}

export default ResNav;
