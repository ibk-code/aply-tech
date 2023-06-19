// ----------- import external dependncies ------------
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ----------- import internal dependncies ------------
import styles from "./style.module.css";
import Btn from "../Btn";

function Navigation() {
  // ------ component state managers -------
  const [open, setopen] = useState(true);

  const resize = () => {
    if (window.outerWidth < 600) {
      setopen(false);
    } else {
      setopen(true);
    }
  };

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <nav className={`container ${styles.navWrapper}`}>
        <Link href="/">
          <img
            src="/img/logo-desktop.png"
            alt="Aply Logo"
            className={`${styles.desktop}`}
          />
          <img
            src="/img/logo-mobile.png"
            alt="Aply Logo"
            className={`${styles.mobile}`}
          />
        </Link>
        {open && (
          <div className={styles.menuWrapper}>
            <ul>
              <li className={styles.menuItem}>
                <Link href="#">Home</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">Blog</Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="#">Register</Link>
              </li>
            </ul>
            <Btn>Sign in</Btn>
          </div>
        )}
        <div className={styles.mobileNav} onClick={() => setopen(!open)}>
          <img src="/mobile-menu.svg" alt="Aply Logo" />
        </div>
      </nav>
    </>
  );
}

export default Navigation;
