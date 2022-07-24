import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Todo from './Todo'
import Shopping from './Shopping'

const Content = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/shopping" element={<Shopping />} />

        </Routes>
    )
}

export default Content