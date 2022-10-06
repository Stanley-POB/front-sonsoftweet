import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Accueil() {
  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.leftdiv}>
          <img src="logo.png" className={styles.logoleftdiv} />
          <div>
            <div>
              <img src="User2.png" className={styles.userimage} />
            </div>
            <div></div>
            <button></button>
          </div>
        </div>
        <div className={styles.middlediv}>
          <h1 className={styles.titles}>Home</h1>
        </div>
        <div className={styles.rightdiv}>
          <h1 className={styles.titles}>Trends</h1>
        </div>
      </div>
    </>
  );
}

export default Accueil;
