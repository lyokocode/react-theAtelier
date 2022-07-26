import React from 'react'

const SignOut = ({ setısAuthenticated }) => {
    return (
        <div className='signout'>
            <button className='signin-btn' onClick={() => setısAuthenticated(true)}>giriş yap </button>
        </div>

    )
}

export default SignOut