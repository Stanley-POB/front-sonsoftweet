import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Link from "next/link";
import {logout} from '../reducers/user';


function Accueil() {

  const dispatch = useDispatch();
  const Logout = () => {
		dispatch(logout());
    window.location.href='/'
	};

  return (
    <>
      <div className={styles.maindiv}>
        <div className={styles.leftdiv}>
          <Link href="/">
            <img src="logo.png" className={styles.logoleftdiv} />
          </Link>
          <div className={styles.userdiv}>
            <div className={styles.topdiv}>
              <div>
                <img src="User2.png" className={styles.userimage} />
              </div>
              <div>
                <p>Medhi</p>
                <p>Bogoss du 78</p>
              </div>
            </div>
            <button className={styles.logoutbutton} onClick={() => Logout()} >Log Out</button>
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
