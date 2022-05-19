import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Phone.module.css'

function Phone() {
  const navigate = useNavigate()
  let inp2 = useRef()
  let inp3 = useRef()
  let inp4 = useRef()
  let btn = useRef()
  const handleClick = e => navigate('/')
  return (
    <div>
        <h1 className={styles.title}>Enter Verification code </h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus fuga iusto quia nesciunt nam!</p>
        <div className={styles.otp}>
          <div>
              <input type="number" onChange={() => inp2.current.focus()} maxLength={1}/>
          </div>
          <div>
              <input type="number" ref = {inp2} onChange={() => inp3.current.focus()}  maxLength={1}/>
          </div>
          <div>
              <input type="number" ref = {inp3} onChange={() => inp4.current.focus()} maxLength={1}/>
          </div>
          <div>
              <input type="number" ref = {inp4} onChange={() => btn.focus()} maxLength={1}/>
          </div>
        </div>
        <div className={styles.continue} ref={btn} onClick={handleClick}>Continue</div>
        <p className={styles.not_recvd}>Code not recieved?</p>
    </div>
  )
}

export default Phone