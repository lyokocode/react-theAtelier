import React from 'react'
import Modal from "react-modal"
import { useSelector, useDispatch } from "react-redux"
import { toogleModal } from 'store/modal'
import "styles/basket.scss"
import { AiOutlineClose } from "react-icons/ai"

const Basket = () => {


    const dispatch = useDispatch()
    const { openModal } = useSelector(state => state.modal)
    return (
        <div className='basket-modal'>
            <Modal
                className="deneme"
                isOpen={openModal}
                onRequestClose={dispatch(toogleModal)}
            >
                <button className='modal-btn' onClick={() => dispatch(toogleModal())} > <AiOutlineClose /> </button>
                <ul>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                    <li>burada listeye eklenen ürünler görülecek</li>
                </ul>

            </Modal>
        </div>
    )
}

export default Basket