import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Signin.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Signin() {
  return (
    <>
      <div className={styles.maindiv}>
        <img src="logo.png" className={styles.logo} />
        <p>Create your Sons of Tweet account</p>
      </div>
    </>
  );
}

export default Signin;
