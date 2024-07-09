import React, { useState } from 'react'
import style from './SignUpPage.module.css'
import { Link } from 'react-router-dom'
import axios from 'axios'


export const SignUpPage = () => {

  const fetchProduct = async () => {
    try {
        let data;
        data =   await axios.get("https://fakestoreapi.com/products");
        console.log(data)  
    }
    catch(error){
        console.log(error)
      
    }}

  const [ updateDetails, userUpdateDetails ] = useState({
    fullName: "",
    emailAddress: "",
    Password: "",
  })


  const handleChange = (e) => {
    const { name, value, files } = e.target;
    userUpdateDetails((prev) => ({
      ...prev,
      [name]: name === '' ? URL.createObjectURL(files[0]) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updateDetails)
  }

  return (
    <div id={style.SignUpPageDiv}>

      <label htmlFor="" id={style.formLabel}>Registeration Form</label>
      <br />
      <form onSubmit={handleSubmit} id={style.RegForm}>
        <h1 id={style.Headertext}> Sign Up Here</h1>

        <div id={style.InputDiv}>
          <label htmlFor="" id={style.formPassword}>Full Name:</label>
          <input
            className={style.SignInput}
            type="text"
            label={"Full Name"}
            placeholder={"Enter your Full Name"}
            name="fullname"
            value={updateDetails.fullName}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="" id={style.formPassword}>Email Address:</label>
          <input
            className={style.SignInput}
            label={"Email Address"}
            placeholder={"Enter your Email Address"}
            type={"text"}
            name="emailAddress"
            value={updateDetails.emailAddress}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="" id={style.formPassword}>Password:</label>
          <input
            className={style.SignInput}
            label={"Password"}
            placeholder={"Enter your Password"}
            type={"password"}
            name="Password"
            value={updateDetails.Password}
            onChange={handleChange}
          />
        </div>
        <br />
        <div id={style.account}>
          <Link className={style.NavContainer} to={'/login'}>
            Already have an account? <span>Click Here to Log in</span>
          </Link>
        </div>

        <button id={style.button}>Sign Up</button>

      </form >


    </div >

  )
}
