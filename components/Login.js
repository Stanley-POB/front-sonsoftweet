import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signin from "./Signin";
import Signup from "./Signup";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";
import { useState } from "react";

function Login() {
  const [isModalOpenSignIn, setIsModalSignInOpen] = useState(false);
  const [isModalOpenSignUp, setIsModalSignUpOpen] = useState(false);

  const showModalSignIn = () => {
    setIsModalSignInOpen(true);
  };
  const showModalSignUp = () => {
    setIsModalSignUpOpen(true);
  };

  const handleOkSignUp = () => {
    setIsModalSignUpOpen(false);
  };

  const handleCancelSignUp = () => {
    setIsModalSignUpOpen(false);
  };

  const handleOkSignIn = () => {
    setIsModalSignInOpen(false);
  };

  const handleCancelSignIn = () => {
    setIsModalSignInOpen(false);
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
            <button className={styles.signupbutton} onClick={showModalSignUp}>
              SIGN UP
            </button>
            <Modal
              open={isModalOpenSignUp}
              onOk={handleOkSignUp}
              onCancel={handleCancelSignUp}
            >
              <Signup />
            </Modal>
            <p>Already have an account?</p>
            <button className={styles.signinbutton} onClick={showModalSignIn}>
              SIGN IN
            </button>
            <Modal
              open={isModalOpenSignIn}
              onOk={handleOkSignIn}
              onCancel={handleCancelSignIn}
            >
              <Signin />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
