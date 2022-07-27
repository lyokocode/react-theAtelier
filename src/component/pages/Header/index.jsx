import React, { useState } from 'react'
import HeaderNav from './HeaderNav'
import HeaderSettings from './HeaderSettings'
import Basket from 'component/pages/Basket'
import { toogleModal } from 'store/modal'
import { useDispatch, useSelector } from "react-redux"
import { BsBasketFill } from "react-icons/bs"
import "styles/header.scss"
import { selectItems } from 'store/basket'

const Header = () => {
    // hamburger menu 
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    const items = useSelector(selectItems)

    return (
        <header className='header'>
            <HeaderNav show={show} />
            <HeaderSettings show={show} setShow={setShow} />

            {/* //modallar */}
            <div className=' basket-icon'>
                <BsBasketFill onClick={() => dispatch(toogleModal())} size={40} color={"green"} />
                <p>
                    {items.length}
                </p>
            </div>
            <Basket />
        </header >
    )
}

export default Header