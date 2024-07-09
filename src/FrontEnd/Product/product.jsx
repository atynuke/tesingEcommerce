import React from 'react'
import ProductDetail from './ProductDetail'
import style from './product.module.css'

export const Product = (props) => {
  const products = [{Image:"",id:"",description:"",price:"",category:"",Title: ""}]
  return (
 <>
<div className={style.container}>
<div className={style.box}>
    <div className= {style.imgBox}>
    <img id={style.productImg} src={props.Image}/>
    </div>

  <div> {props.category}</div>
 <div className={style.info}>
 <h1> {props.Title}</h1>
 <p> {props.price}</p>
 </div>
  <div> {props.description}</div>
  <button>View</button>
</div>
</div>
 </>


)
    
  
}



  // // return (
  //   <>
  //   <div className={style.Container}>
  //     {
  //       ProductDetail.map((props) => {
  //         return {
  //             // < div className = { style.box } >
  //           // <div className={style.imgBox}>
  //             <img id={style.ProdImg} src={props.image} alt="" />
  //           // </div>
  //             // </div>              
  //           }

  //       })
  //     }
  // </div >