import React from 'react'
import { Routes, Route } from "react-router-dom"
import Todo from './pages/Todo'
import Shopping from './pages/Shopping'
import Expense from './pages/Expense'
import HomeLayout from './pages/Home/HomeLayout'
import Home from "./pages/Home/Home"
import Mac from './pages/Home/restourants/Mac'
import AfterEat from './pages/Home/restourants/AfterEat'
import FitThings from './pages/Home/restourants/FitThings'
import AmericanSandwich from './pages/Home/restourants/AmericanSandwich'

const Content = () => {
    return (
        <Routes>
            <Route exact path="/" element={<HomeLayout />} >
                <Route index={true} element={<Home />} />
                <Route path='mac' element={<Mac />} />
                <Route path='after' element={<AfterEat />} />
                <Route path='fitThings' element={<FitThings />} />
                <Route path='americanSandwichClub' element={<AmericanSandwich />} />
            </Route>
            <Route path="/todo" element={<Todo />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/expense" element={<Expense />} />

        </Routes>
    )
}

export default Content