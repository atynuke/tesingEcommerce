import React from 'react'
import style from '../ProductPage/product.module.css'




export const Cart1 = () => {

  const { image, id, description, price, category, title } = props

  return (
    <div>

      <div id='cart-image'>
        <img src={image} alt="" />
      </div>

      <div id='cart-idDiv'>
        <h2 className='cart-id'>id: {id}</h2>
        <p className='cart-description'>description: {description}</p>

      </div>
      <div className='cart-text'>
        <h1 className='cart-title'>title: {title}</h1>
        <p className='cart-category'>category: {category}</p>
      </div>

      <div id='cartsizeDiv'>
        <div id='cart-size'></div>
        <p className='cart-price'>price: ${price}</p>

      </div>

    </div>
  )
}
     
