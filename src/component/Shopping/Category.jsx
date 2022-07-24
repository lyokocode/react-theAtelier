import React, { useEffect, useState } from 'react'

const Category = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {

        fetch("http://localhost:3000/categories")
            .then(res => res.json())
            .then(data => setCategories(data))

        console.log("tetiklendi");
    }, [])

    return (
        <></>
        // <div className='category-container'>
        //     <ul>
        //         {categories.map(category => (
        //             <li key={category.CategoryId}>{category.CategoryName}</li>
        //         ))}
        //     </ul>
        // </div>
    )
}

export default Category