import React from 'react'
import { NavLink } from "react-router-dom"
import SignOut from 'component/user/SignOut'
import "styles/header.scss"
import SignIn from 'component/user/SignIn'

const Header = () => {
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
                    <h4>Shopping</h4>
                </NavLink>
                <NavLink to="/expense">
                    <h4>Expense</h4>
                </NavLink>
            </nav>
            <SignOut />
            <NavLink className="profile" to="/">

                <SignIn />
            </NavLink>
        </header>
    )
}

export default Header