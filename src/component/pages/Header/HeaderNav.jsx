import React from 'react'
import SignIn from 'component/User/SignIn'
import { NavLink } from "react-router-dom"

const HeaderNav = ({ show }) => {
    return (
        <>
            <NavLink to="/" className='logo'>
                <img src="images/logo.png" alt="logo" />
            </NavLink>
            <nav className={show ? "navbar" : "navbar block"} >
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
        </>
    )
}

export default HeaderNav