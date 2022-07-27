import React, { useState } from 'react'
import HeaderNav from './HeaderNav'
import HeaderSettings from './HeaderSettings'
import Basket from 'component/pages/Basket'
import { toogleModal } from 'store/modal'
import { useDispatch } from "react-redux"
import { BsBasketFill } from "react-icons/bs"
import "styles/header.scss"

const Header = () => {
    // hamburger menu 
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()

    return (
        <header className='header'>
            <HeaderNav show={show} />
            <HeaderSettings show={show} setShow={setShow} />

            {/* //modallar */}
            <BsBasketFill onClick={() => dispatch(toogleModal())} size={40} color={"green"} />
            <Basket />
        </header >
    )
}

export default Header