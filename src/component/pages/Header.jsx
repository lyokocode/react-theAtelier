import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import SignOut from 'component/user/SignOut'
import SignIn from 'component/user/SignIn'
import "styles/header.scss"
import { BsFillBasketFill } from "react-icons/bs"


const Header = () => {

    const [isAuthenticated, setısAuthenticated] = useState(false)


    return (
        <header className='header'>
            <NavLink to="/" className='logo'>
                <img src="images/logo.png" alt="logo" />
            </NavLink>
            <nav className='navbar'>
                <NavLink to="/todo">
                    <h4>Todo</h4>
                </NavLink>
                <NavLink to="/shopping">
                    <button disabled={!isAuthenticated} >
                        Shopping
                    </button>
                </NavLink>
                <NavLink to="/expense">
                    <h4 >Expense</h4>
                </NavLink>
            </nav>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                {
                    isAuthenticated && <BsFillBasketFill style={{ width: "40px", height: "40px", color: "#4ab866" }} />

                }
                <NavLink to="/">
                    {isAuthenticated ? <SignIn setısAuthenticated={setısAuthenticated} /> : <SignOut setısAuthenticated={setısAuthenticated} />}
                </NavLink>
            </div>

        </header >
    )
}

export default Header