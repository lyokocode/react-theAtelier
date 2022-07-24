import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Todo from './Todo'
import Shopping from './Shopping'
import Expense from './Expense'

const Content = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/expense" element={<Expense />} />

        </Routes>
    )
}

export default Content