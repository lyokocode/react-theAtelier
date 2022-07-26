import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import SignIn from 'component/user/SignIn'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import "styles/header.scss"

const Header = () => {

    const [show, setShow] = useState(false)



    return (
        <><header className='header'>
            <NavLink to="/" className='logo'>
                <img src="images/logo.png" alt="logo" />
            </NavLink>
            <nav className={show ? "navbar" : "block"} >
                <NavLink to="/todo">
                    <h4>Todo</h4>
                </NavLink>
                <NavLink to="/shopping">
                    <h4 >
                        Shopping
                    </h4>
                </NavLink>
                <NavLink to="/expense">
                    <h4 >Expense</h4>
                </NavLink>
                <div className='basket' >
                    <NavLink to="/">
                        <SignIn />
                    </NavLink>
                </div>
            </nav>

            <button onClick={() => setShow(!show)} className="hamburger">
                {
                    show ? <AiOutlineClose className='hamburger-icon ' />
                        : < GiHamburgerMenu className='hamburger-icon ' />
                }
            </button>

        </header >
        </>

    )
}

export default Header