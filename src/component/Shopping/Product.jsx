import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill, BsFillBasketFill } from "react-icons/bs"
import { AiFillCloseCircle } from "react-icons/ai"
import { NavLink } from 'react-router-dom'
import Basket from './Basket'

const Product = ({ list }) => {

    const [product, setProduct] = useState([])
    useEffect(() => {
        let url = "http://localhost:3000/products"
        // product listing by category
        if (list) {
            url += `?categoryId=${list}`
        }
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [list])
    console.log(list);

    // form
    const [search, setSearch] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const [show, setShow] = useState(false)


    return (
        <div id='topofpage' className='product'>
            <button onClick={() => setShow(!show)} className="basket-icon">
                {show ? <AiFillCloseCircle className='icon-basket' /> : <BsFillBasketFill className='icon-basket' />}
            </button>
            {show && <Basket />}
            <div className='search-container'>
                <form onSubmit={handleSubmit}>
                    <input placeholder='ürünlerde ara' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className='search-btn'>Listele</button>
                </form>
            </div>
            <ul>
                {product.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item) => (
                    <li key={item.id}>
                        {item.name}
                        <div>
                            <button className='cart-btn'>ekle</button>
                        </div>
                    </li>
                ))}
            </ul>
            <button className='to-top'> <a href="#topofpage"><BsFillArrowUpCircleFill className='icon' /> </a> </button>
        </div>
    )
}

export default Product