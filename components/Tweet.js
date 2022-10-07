import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "antd/dist/antd.css";
import { useState } from "react";
import Link from "next/link";

function Tweet() {
  /* ******************************************************* */

  return (
    <>
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
    </>
  );
}

export default Tweet;
