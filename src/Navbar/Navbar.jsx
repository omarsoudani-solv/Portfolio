import styles from "./Navbar.module.css";
function Navbar({ list }) {
  return (
    <>
      <header className={styles.header}>
        <p>
          <a href="#Home" className={styles.logo}>
            Omar
          </a>
        </p>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {list.map((elem, index) => {
              return (
                <li key={index}>
                  <a href={`#${elem}`} className={styles.a}>
                    {elem}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
