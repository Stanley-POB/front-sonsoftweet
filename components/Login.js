import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signin from "./Signin";
import Signup from "./Signup";
import { Button, Modal } from "antd";
import { useState } from "react";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };



  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.leftdiv}>
          <img src="logo.png" className={styles.logoleftdiv} />
        </div>
        <div className={styles.rightdiv}>
          <img src="logo.png" className={styles.logorightdiv} />
          <div>
            <h1 className={styles.maintitle}>See what's happening</h1>
            <h2>Join Sons of Tweet today!</h2>
            <button className={styles.signupbutton} onClick={showModal}>
              SIGN UP
            </button>
            <Modal open={isModalOpen}>
              <Signup />
            </Modal>
            <p>Already have an account?</p>
            <button className={styles.signinbutton} onClick={showModal}>
              SIGN IN
            </button>
            <Modal open={isModalOpen}>
              <Signin />
            </Modal>
          </div>
          <div className={styles.testdiv}>
            <img src="logo.png" className={styles.logorightdiv} />
            <p>Create your Sons of Tweet account</p>
            <input placeholder="First name" className={styles.input}></input>
            <input placeholder="Username" className={styles.input}></input>
            <input placeholder="Password" className={styles.input}></input>
            <button className={styles.signupbuttonmodal}>Sign UP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
