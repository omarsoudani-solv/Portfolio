import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faV } from "@fortawesome/free-solid-svg-icons/faV";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const prttltvar = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
};
const tltvar = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const secvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4 } },
};
const titlevar = {
  hidden: {
    opacity: 0,
  },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};
const contvar = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};
const elemconttvar = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
function Contact() {
  return (
    <>
      <section className={styles.section} id="Contact">
        <div className={styles.container}>
          <motion.div
            className={styles.title}
            variants={prttltvar}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 variants={tltvar}>
              Contact<span> Me!</span>
            </motion.h2>
            <motion.p variants={tltvar}>
              Always up for a chat about new ideas. Feel free to reach out
              anytime! ☕
            </motion.p>
          </motion.div>
          <div className={styles.content}>
            <motion.div
              className={styles.soucontent1}
              variants={secvar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3 variants={titlevar}>Email</motion.h3>
              <div className={styles.cont}>
                <motion.div
                  className={styles.emailpart}
                  variants={elemconttvar}
                >
                  <FontAwesomeIcon icon={faEnvelope} className={styles.icn} />
                  <motion.p
                    whileHover={{
                      color: "var(--text-color)",
                      transition: { duration: 0.2, ease: "easeOut" },
                    }}
                  >
                    omarsoudani.solv@gmail.com
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className={styles.soucontent2}
              variants={secvar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3 variants={titlevar}>Social Media</motion.h3>
              <motion.div className={styles.cont} variants={contvar}>
                <motion.div className={styles.part} variants={elemconttvar}>
                  <a
                    href="https://www.linkedin.com/in/omar-soudani-2b5415393/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className={styles.icn}
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/omar-soudani-2b5415393/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.p
                      whileHover={{
                        color: "var(--text-color)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      Linked In
                    </motion.p>
                  </a>
                </motion.div>
                <motion.div className={styles.part} variants={elemconttvar}>
                  <a
                    href="https://github.com/omarsoudani-solv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className={styles.icn} />
                  </a>
                  <a
                    href="https://github.com/omarsoudani-solv"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.p
                      whileHover={{
                        color: "var(--text-color)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      GitHub
                    </motion.p>
                  </a>
                </motion.div>
                <motion.div className={styles.part} variants={elemconttvar}>
                  <a href="" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faV} className={styles.icn} />
                  </a>
                  <a href="" rel="noopener noreferrer">
                    <motion.p
                      whileHover={{
                        color: "var(--text-color)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      Vercel
                    </motion.p>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className={styles.soucontent3}
              variants={secvar}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h3 variants={titlevar}>Talk to me</motion.h3>
              <motion.div className={styles.cont} variants={contvar}>
                <motion.div className={styles.part} variants={elemconttvar}>
                  <a href="" rel="noopener noreferrer">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={styles.icn}
                    />
                  </a>
                  <a href="" rel="noopener noreferrer">
                    <motion.p
                      whileHover={{
                        color: "var(--text-color)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      Instagram
                    </motion.p>
                  </a>
                </motion.div>
                <motion.div className={styles.part} variants={elemconttvar}>
                  <a
                    href="https://www.facebook.com/profile.php?id=61584786350629&locale=fr_FR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} className={styles.icn} />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61584786350629&locale=fr_FR"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.p
                      whileHover={{
                        color: "var(--text-color)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      Facebook
                    </motion.p>
                  </a>
                </motion.div>
                <motion.div className={styles.part} variants={elemconttvar}>
                  <a href="" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} className={styles.icn} />
                  </a>
                  <a href="" rel="noopener noreferrer">
                    <motion.p
                      whileHover={{
                        color: "var(--text-color)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      Telegram
                    </motion.p>
                  </a>
                </motion.div>
                <motion.div className={styles.part} variants={elemconttvar}>
                  <a
                    href="https://wa.me/213699026130"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className={styles.icn} />
                  </a>
                  <a
                    href="https://wa.me/213699026130"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.p
                      whileHover={{
                        color: "var(--text-color)",
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                    >
                      Whatsapp
                    </motion.p>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;
