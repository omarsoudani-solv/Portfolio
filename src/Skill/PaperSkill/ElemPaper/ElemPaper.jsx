import styles from "./ElemPaper.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Level = (advprce) => {
  if (advprce > 50 && advprce <= 65) {
    return "Average";
  } else if (advprce > 65 && advprce <= 85) {
    return "Good";
  } else {
    return "Exellent";
  }
};
function ElemPaper({ icon, name, exp, advprce }) {
  return (
    <>
      <div className={styles.elem}>
        <div className={styles.part1}>
          <div className={styles.soupart1}>
            <div className={styles.icns}>
              <FontAwesomeIcon icon={icon} className={styles.icn} />
            </div>
            <div className={styles.name}>
              <p
                style={{
                  color: "var(--text-color)",
                  fontSize: "var(--font-p)",
                }}
              >
                {name}
              </p>
              <p
                style={{
                  color: "var(--text-muted-color)",
                  fontSize: "var(--font-small)",
                  textAlign: "left",
                }}
              >
                {exp}
              </p>
            </div>
          </div>
          <div className={styles.soupart2}>
            <div>
              <p
                style={{
                  color: "var(--second-color)",
                  fontSize: "var(--font-p)",
                  fontWeight: "700",
                }}
              >
                {Level(advprce)}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.prce} title={`${advprce}%`}>
            <div style={{ width: `${advprce}%` }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ElemPaper;
