import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from "react-icons/bs"

const Product = ({ list }) => {

    const [search, setSearch] = useState("");
    const [product, setProduct] = useState([])


    useEffect(() => {
        let url = "http://localhost:3000/products"
        if (list) {
            url = `${url}?categoryId=${list} `
        }


        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))


    }, [list])

    return (
        <div id='topofpage' className='product'>

            <div className='search-container'>
                <form>
                    <input placeholder='ürünlerde ara' value={search} onChange={(e) => setSearch(e.target.value)} />
                    <button className='search-btn'>Listele</button>
                </form>
            </div>
            <ul>
                {product.filter(item => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item) => (
                    <li key={item.id}>
                        {item.name}

                        <button className='cart-btn'>ekle</button>
                    </li>
                ))}
            </ul>
            <button className='to-top'> <a href="#topofpage"><BsFillArrowUpCircleFill className='icon' /> </a> </button>
        </div>
    )
}

export default Product