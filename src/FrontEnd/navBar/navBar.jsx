import React from 'react'
import style from './navBar.module.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {

    return (
        <div id={style.Container}>


            <div className={style.NavContainer}>
                <div className={style.NavContain}>
                    <Link className={style.links} to={'/contact'}>
                        <a href="">Contact</a>
                    </Link>
                    <Link className={style.links} to={'/product_detail'} onClick={()=>{("product")}}>
                        <a href="">Product</a> <hr />
                    </Link>

                </div>

                <div className={style.serachDiv}>
                    <input type="search" placeholder={"search item"} name="" id={style.search} />
                    <Link className={style.links} to={'/cart'}>
                        <img src="./src/Image/search.png" alt="" id={style.img} />
                    </Link>
                </div>
                <div className={style.NavContainer1}>
                    <Link className={style.links} to={'/logIn'}>
                        <button>                        
                            <a href="">Sign In</a> 
                        </button>
                    </Link>

                    <Link className={style.links} to={'/signup'}>
                        <button>                        
                            <a href="">Sign Up</a>
                        </button>
                    </Link>

                    {/* <Link className={style.links} to={'/cart'}>
                        <a href="">Cart</a>
                    </Link> */}

                    <Link className={style.links} to={'/cart'}>
                            <img src="./src/Image/shoopingcart.png" alt=""  id={style.cartImg}/>
                        </Link>

                </div>
            </div>

            <div>

            </div>

        </div>
    )
}

