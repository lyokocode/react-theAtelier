import React from 'react'
import { NavLink } from "react-router-dom"
import "../styles/header.scss"

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
            <NavLink className="profile" to="/">
                <div>
                    <img src="https://pbs.twimg.com/profile_images/1328346782733045760/NjloAlik_400x400.jpg" alt="logo" />
                </div>
                <h4>"Aelita"</h4>
            </NavLink>
        </header>
    )
}

export default Header