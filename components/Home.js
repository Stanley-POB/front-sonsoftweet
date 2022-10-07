import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import Link from "next/link";
import { logout } from "../reducers/user";


function Accueil() {
  const dispatch = useDispatch();
  const Logout = () => {
    dispatch(logout());
    window.location.href = "/";
  };

  // const handleLikeMovie = () => {
  //   props.updateLikedMovies(props.title);
  // };
  // let heartIconStyle = { 'cursor': 'pointer' };
  // if (props.isLiked) {
  //   heartIconStyle = { 'color': '#e74c3c', 'cursor': 'pointer' };
  // }


  const userFirstname = useSelector((state) => state.user.value);
  const userUsername = useSelector ((state) => state.user.value);

  //console.log('fsfzef',userFirstname)

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
                <p>{userFirstname.firstname}</p>
                <p>{userUsername.username}</p>
              </div>
            </div>
            <button className={styles.logoutbutton} onClick={() => Logout()}>
              Log Out
            </button>
          </div>
        </div>
        <div className={styles.middlediv}>
          <div className={styles.topmiddlediv}>
            <h1 className={styles.titles}>Home</h1>
          </div>
          <div className={styles.createtweet}>
            <div>
              <input
                type="text"
                placeholder="WHAT'S UP???"
                className={styles.tweetinput}
              />
            </div>
            <div>
              <button className={styles.tweetbutton}>Tweet</button>
            </div>
          </div>
          <div className={styles.tweets}>
            <div className={styles.topdivtweet}>
              <img src="User2.png" className={styles.tweetimage} />
              <span className={styles.firstname}>First Name</span>
              <span>Username</span>
            </div>
            <p className={styles.tweetbody}>TWEEEEEEEEEEEEEEEEEEEET</p>
            <div className={styles.icon}>
              <span>
                <FontAwesomeIcon icon={faHeart} className={styles.heart} />
              </span>
              <span>
                <FontAwesomeIcon icon={faTrashCan} className={styles.trash} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.rightdiv}>
          <div className={styles.toprightdiv}>
            <h1 className={styles.titles}>Trends</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accueil;
