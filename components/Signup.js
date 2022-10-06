
import Image from "next/image";
import styles from "../styles/Signup.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {login} from '../reducers/user'
import { useDispatch } from 'react-redux';

function Signup() {
	
  const dispatch = useDispatch();

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
        console.log('frgrdgdrg',data)
				if (data.result) {
					dispatch(login({ firstname: signUpFirstname, username: signUpUsername, token: data.token }));
					setSignUpFirstname('')
          setSignUpUsername('');
					setSignUpPassword('');
          window.location.href='/home'
				}
			});
	};


  return (
    <>
      <div className={styles.testdiv}>
        <img src="logo.png" className={styles.logo} />
        <p>Create your Sons of Tweet account</p>
        <input placeholder="First name" className={styles.input} onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}></input>
        <input placeholder="Username" className={styles.input} onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}></input>
        <input placeholder="Password" className={styles.input} onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} ></input>
        <button className={styles.signupbuttonmodal} onClick={() => handleRegister()} >Sign Up</button>
      </div>
    </>
  );
}

export default Signup;
