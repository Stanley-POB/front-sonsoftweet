import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Signin from "./Signin";
import Signup from "./Signup";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";
import { useState } from "react";
import Link from "next/link";

function Login() {
  const [isModalOpenSignIn, setIsModalSignInOpen] = useState(false);
  const [isModalOpenSignUp, setIsModalSignUpOpen] = useState(false);

  /*   Fonctions du Modal */
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

  /* ******************************************************* */

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.leftdiv}>
          <img src="logo.png" className={styles.logoleftdiv} />
        </div>
        <div className={styles.rightdiv}>
          <img src="logo.png" className={styles.logorightdiv} />
          <div className={styles.rightdivcontent}>
            <h1 className={styles.maintitle}>See what's happening</h1>
            <h2 className={styles.secondtitle}>Join Sons of Tweet today!</h2>
            <Link href="/home">
              <span className={styles.homepage}>HOMEPAGE</span>
            </Link>
            <div className={styles.rightdivbutton}>
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
              <button className={styles.signinbutton} onClick={showModalSignIn}>
                SIGN IN
              </button>
              <p>Already have an account?</p>
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
      </div>
    </>
  );
}

export default Login;
