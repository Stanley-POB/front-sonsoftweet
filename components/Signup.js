import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Signup() {
  return (
    <>
      <div className={styles.testdiv}>
        <img src="logo.png" className={styles.logo} />
        <p>Create your Sons of Tweet account</p>
        <input placeholder="First name" className={styles.input}></input>
        <input placeholder="Username" className={styles.input}></input>
        <input placeholder="Password" className={styles.input}></input>
        <button className={styles.signupbuttonmodal}>Sign Up</button>
      </div>
    </>
  );
}

export default Signup;
