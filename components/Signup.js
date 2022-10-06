import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Signup() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <>
      <div className={styles.maindiv}></div>
    </>
  );
}

export default Signup;
