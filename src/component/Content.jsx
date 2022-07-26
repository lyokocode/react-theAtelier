import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Todo from './pages/Todo'
import Shopping from './pages/Shopping'
import Expense from './pages/Expense'

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