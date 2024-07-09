import React from 'react'
import style from './contact.module.css'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className={style.contactDiv}>
        <div className={style.conat}>
          <br />
          <h1 id={style.sale}>CHRISTMAS SALE</h1>
          <div id={style.off}>30% OFF</div>
          <br />

          <Link className={style.link} to={'/product'}>
            <button>SHOP NOW</button>
          </Link>
        </div>
      </div>

      <div className={style.ContactForm}>

        <div id={style.Us}>CONTACT US</div>
        <br />
        <p>For more informations and enquires on the current 30% sales <br /> Discount going on
          between 1st December to the 31st of December <br /> 2024, write to us now.  </p>
        <label htmlFor="" className={style.label}>Your Name (required):</label>
        <input type="text" placeholder={"write your name"} className={style.input} />
        <br />
        <label htmlFor="" className={style.label}>Your Email (required):</label>
        <input type="text" placeholder={"write your email"} className={style.input} />
        <br />
        <label htmlFor="" className={style.label}>Subject:</label>
        <input type="text" placeholder={"write your subject"} className={style.input} />
        <br />
        <label htmlFor="" className={style.label}>Your Message:</label>
        <textarea name="" placeholder={"write your message"} id={style.messageBox} className={style.input} cols="30"></textarea>
        <br />

        <Link className={style.link} to={'/gmail'}>
          <a href="mailto:www.mtstore@gmail.com" target="_blank">
            <button>SEND</button> </a>
        </Link>

      </div>
    </>
  )
}

export default Contact