import React from 'react'
import { NavBar } from '../FrontEnd/navBar/navBar'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <>
            <div className='headerContainer'>
                <div className='header'>
                    <Link className='links' to={'./home'}>
                        <div className='headerLogo'>
                            <img src="./src/Image/store-with-mobile-shopping-bag.png" alt="" id='store-mobile' />
                            <h1 id='headerName'>ZORA</h1>
                        </div>
                    </Link>
                    <div className='headera'>
                        <Link className='links' to={'./home'}>
                            <a href="" className='links'  >Cart</a>
                            <img src="./src/Image/shoppingcart.png" alt=""  id='cartImg'/>
                        </Link>
                        <Link className='links' to={'./signUp'}>
                            <a href="" className='links' id='account' >Open Account</a>
                        </Link>
                    </div>
                </div>

            </div>

            <NavBar />


        </>

    )
}

export default Header