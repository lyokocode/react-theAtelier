import React, { useEffect, useState } from 'react'
// import Category from './Category'
import Product from './Product'
import "../../styles/shopping.scss"

const Shopping = () => {

    const [categories, setCategories] = useState([])
    const [list, setList] = useState("")

    useEffect(() => {

        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))

        console.log("tetiklendi");
    }, [])

    const changeCategory = (category) => {
        setList(category.CategoryId)
        console.log(category.CategoryId);
    }

    return (
        <aside className='shopping'>
            {/* <Category /> */}
            <div className='category-container'>

                <ul>
                    <li >all</li>
                    {categories.map(category => (
                        <li onClick={() => changeCategory(category)} key={category.CategoryId}>{category.CategoryName}</li>
                    ))}
                </ul>
            </div>
            <div className='container'>
                <Product list={list} changeCategory={changeCategory} />
            </div>

        </aside>
    )
}

export default Shopping