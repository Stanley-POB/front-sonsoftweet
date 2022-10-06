import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Accueil() {
  return (
    <>
      <div className={styles.maindiv}>
        <p className={styles.title}>SONS OF Tweet</p>
      </div>
    </>
  );
}

export default Accueil;
