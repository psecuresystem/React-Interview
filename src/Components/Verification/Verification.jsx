import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './Verification.module.css'

function Verification() {
  let [Uname,setUname] = useState('Italy')
  let [Pass,setPass] = useState('')

  const navigate = useNavigate()

  const handleClick = e => Uname == '' || Pass == '' ? alert("Fields should not be empty") : navigate('/loggedin')


  return (
    <div className={styles.login}>
        <h1 className={styles.title}>Phone registration</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga iusto quia nesciunt nam!</p>
        <div className="form">
          <div className={styles.input}>
            <p>Enter your country code</p>
            <select name="" id="">
                <option value="Italy">Italy</option>
                <option value="Italy">Italy</option>
                <option value="Italy">Italy</option>
            </select>
          </div>
          <div className={styles.pass}>
            <p>Enter your phone number</p>
            <input type="password" placeholder='+61 123 456 7890' onChange={(e) => setPass(e.target.value)}/>
          </div>
        </div>
        <p className={styles.forgotp}></p>
        <div className={styles.login_btn} onClick={handleClick}>Register</div>
        <p className={styles.register}>Already have an account? <Link to={'/'}>login</Link></p>
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


export default Verification