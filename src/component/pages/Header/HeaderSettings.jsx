import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { setColorMode } from 'store/site'
import { useSelector, useDispatch } from "react-redux"

const HeaderSettings = ({ show, setShow }) => {

    const { color } = useSelector(state => state.site)
    const dispatch = useDispatch()

    return (
        <>
            <button onClick={() => setShow(!show)} className="hamburger">
                {
                    show ? <AiOutlineClose className='hamburger-icon ' />
                        : < GiHamburgerMenu className='hamburger-icon ' />
                }
            </button>
            {/* <button onClick={() => dispatch(setColorMode())}>
                {color ? "normal moda geç" : "arka planı değiştir"}
            </button> */}
        </>
    )
}

export default HeaderSettings