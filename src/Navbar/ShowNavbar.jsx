import styles from "./Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import ResNav from "./ResNav";
function ShowNavbar({ list }) {
  const [showNav, setShowNav] = useState("show");
  const ShowNavState = () => {
    let screnWidth = window.innerWidth;
    if (screnWidth <= 750) {
      setShowNav("hide");
    } else {
      setShowNav("show");
    }
  };
  useEffect(() => {
    ShowNavState();
    window.addEventListener("resize", ShowNavState);
    return () => {
      window.removeEventListener("resize", ShowNavState);
    };
  }, []);
  const ShowNav = (state) => {
    if (state === "show") {
      return <Navbar list={list} />;
    } else {
      return <ResNav list={list} />;
    }
  };
  return <>{ShowNav(showNav)}</>;
}

export default ShowNavbar;
