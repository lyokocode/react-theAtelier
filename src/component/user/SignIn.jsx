import React from 'react'
import "styles/user.scss"
import { FaSignOutAlt } from "react-icons/fa"

const SignIn = ({ setısAuthenticated }) => {

    return (
        <div className='signin'>
            <div className='profile'>
                <div >
                    <img src="https://pbs.twimg.com/profile_images/1328346782733045760/NjloAlik_400x400.jpg" alt="logo" />
                </div>
            </div>
            <div className='user'>
                <h4 >"Aelita"</h4>
                <FaSignOutAlt className='signout-icon' onClick={() => setısAuthenticated(false)} />
            </div>
        </div>
    )
}

export default SignIn