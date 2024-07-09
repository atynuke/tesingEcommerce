import React, { useState } from 'react'
import style from './LogIn.module.css'
import { Link } from 'react-router-dom'



export const LogIn = () => {

  const [signIn, setSignIn] = useState({
    emailAddress: "",
    Password: "",
  })

  // const [signInError, setSignInError] = useState();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setSignIn((prev) => ({
      ...prev,
      [name]: name === '' ? URL.createObjectURL(files[0]) : value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signIn)
  }


  return (
    <>
      <div className={style.wrapper}>

        <label htmlFor="" id={style.formHeading}>Log In Form</label>
        <br />
        <form onSubmit={handleSubmit} id={style.LogInForm}>
          <h1 id={style.Headertext}> Log In Now</h1>

          <div id={style.inputDiv}>

            <label htmlFor="" id={style.formHeader}>Email Address:</label>

            <input
              className={style.Input}
              label={"Email Address"}
              placeholder={"Enter your Email address"}
              type={"text"}
              name={"email"}
              value={signIn.emailAddress}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="" id={style.formHeader}>Password:</label>
            <input
              className={style.Input}
              label={"Password"}
              placeholder={"Enter your Password"}
              type={"password"}
              name={"password"}
              value={signIn.Password}
              onChange={handleChange}
            />
          </div>
          <br />
          <div id={style.SignAccount}>
          <Link id={style.Support} to={'/support'}>
              Forgot Password? Click Here!
            </Link>
            <Link className={style.NavContainer} to={'/signup'}>
              Don’t have an account? <span>Sign Up</span>
            </Link>
            <br />
            <button id={style.bttn} >Submit</button>

          </div>


        </form>

      </div>
    </>
  )
}
