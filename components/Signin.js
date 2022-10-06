import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Signin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Signin() {
  return (
    <>
      <div className={styles.testdiv}>
        <img src="logo.png" className={styles.logo} />
        <p>Connect to Sons of Tweet account</p>
        <input placeholder="Username" className={styles.input}></input>
        <input placeholder="Password" className={styles.input}></input>
        <button className={styles.signupbuttonmodal}>Sign In</button>
      </div>
    </>
  );
}

export default Signin;
