import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css'

function Login() {
  let [Uname,setUname] = useState('')
  let [Pass,setPass] = useState('')
  let navigate = useNavigate()

  const handleClick = e => Uname == '' || Pass == '' ? alert("Fields should not be empty") : navigate('/loggedin')

  return (
    <div className={styles.login}>
        <h1 className={styles.title}>Login to General app</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga iusto quia nesciunt nam!</p>
        <div className="form">
          <div className={styles.input}>
            <p>Username</p>
            <input type="text" onChange={(e) => setUname(e.target.value)}/>
          </div>
          <div className={styles.pass}>
            <p>Password</p>
            <input type="password" onChange={(e) => setPass(e.target.value)}/>
          </div>
        </div>
        <hr/>
        <p className={styles.or}>or</p>
        <div className={styles.oauth}>
          <div className="apple"></div>
          <div className="facebook"></div>
          <div className="twitter"></div>
        </div>
        <p className={styles.forgotp} onClick = {() => navigate('/phone')}>Forgot password?</p>
        <div className={styles.login_btn} onClick={handleClick}>Login</div>
        <p className={styles.register}>I'm a new user? <Link to={'/verify'}>Registration</Link></p>
    </div>
  )
}

function Input({ label, password = false }) {
  return (
    <div className={styles.input}>
      <p>{label}</p>
      <input type={!password ? "text" : "password"}/>
    </div>
  )
} 


export default Login