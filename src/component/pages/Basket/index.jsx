import React, { useEffect } from 'react'
import Modal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import { toogleModal } from 'store/modal'
import "styles/basket.scss"
import { AiOutlineClose } from "react-icons/ai"
import { removeFromBasket, selectItems } from 'store/basket'


const Basket = () => {


    const dispatch = useDispatch()
    const { openModal } = useSelector(state => state.modal)

    const items = useSelector(selectItems)



    const removeItemFromBasket = (item) => {
        dispatch(removeFromBasket(item))

    }

    return (
        <>
            <Modal
                className="basket-modal"
                isOpen={openModal}
                onRequestClose={() => dispatch(toogleModal)}
                ariaHideApp={false}

            >
                <button className='modal-btn' onClick={() => dispatch(toogleModal())} > <AiOutlineClose /> </button>

                <h1 className='basket-title'>{items.length === 0 ? "sepet boş" : `alışveriş listende ${items.length} adet ürün bulunmaktadır`}</h1>
                <ul>
                    {items.map((item, i) => (
                        <li key={i}>
                            {item.name}
                            <div>
                                <button onClick={() => removeItemFromBasket(item)}>sil</button>
                            </div>
                        </li>
                    ))}
                </ul>

            </Modal>
        </ >
    )
}

export default Basket