import Content from "component/Content";
import React from "react";
import { Outlet } from "react-router-dom";
import "styles/home.scss"
import { NavLink } from "react-router-dom";
const Home = () => {

    return (
        <div className="home-page">

            <header className='home-header'>
                <NavLink to="mac">
                    <figure className="logo-container">
                        <img src="images/maclogo.jpg" />

                    </figure>
                </NavLink>
                <NavLink to="after">
                    <figure className="logo-container">
                        <img src="images/afterlogo.jpg" />

                    </figure>
                </NavLink>
                <NavLink to="fitThings">
                    <figure className="logo-container">
                        <img src="images/fitlogo.jpg" />

                    </figure>
                </NavLink>
                <NavLink to="americanSandwichClub">
                    <figure className="logo-container">
                        <img src="images/asclogo.jpg" />

                    </figure>
                </NavLink>
            </header>
            <Outlet />

        </div>
    )
}

export default Home