import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import styles from "../styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Signup() {
	
  const [signUpFirstname, setSignUpFirstname] = useState('');
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');



	const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ firstname: signUpFirstname, username: signUpUsername, password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ firstname: signUpFirstname,username: signUpUsername, token: data.token }));
					setSignUpFirstname('')
          setSignUpUsername('');
					setSignUpPassword('');
					setIsModalVisible(false)
          window.location.href=''
				}
			});
	};


  return (
    <>
      <div className={styles.testdiv}>
        <img src="logo.png" className={styles.logo} />
        <p>Create your Sons of Tweet account</p>
        <input placeholder="First name" className={styles.input}></input>
        <input placeholder="Username" className={styles.input}></input>
        <input placeholder="Password" className={styles.input}></input>
        <button className={styles.signupbuttonmodal} onClick={() => handleRegister()} >Sign Up</button>
      </div>
    </>
  );
}

export default Signup;
