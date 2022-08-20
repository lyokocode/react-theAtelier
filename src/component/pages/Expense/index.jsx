import React, { useState, useEffect } from 'react'
import "styles/expense.scss"
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import Alert from '../../Alert/Alert'
import { v4 as uuidv4 } from 'uuid';


const Expense = () => {

    const getLocalStorage = () => {
        let expenses = localStorage.getItem("expenses");
        if (expenses) {
            return JSON.parse(localStorage.getItem("expenses"))
        } else {
            return []
        }
    }

    const [expenses, setExpenses] = useState(getLocalStorage);
    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState("");
    const [alert, setAlert] = useState({ show: false });
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);



    const handleCharge = (e) => {
        setCharge(e.target.value)
    }
    const handleAmount = (e) => {
        setAmount(e.target.value)
    }

    const handleAlert = ({ type, msg }) => {
        setAlert({ show: true, type, msg })
        setTimeout(() => {
            setAlert({ show: false })
        }, 3000)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (charge !== "" && amount > 0) {

            if (edit) {
                let tempExpenses = expenses.map(item => {
                    return item.id === id ? { ...item, charge, amount } : item
                })
                setExpenses(tempExpenses)
                setEdit(false)
                handleAlert({ type: "success", msg: "gider düzenlendi." })
            } else {

                const singleExpense = { id: uuidv4(), charge, amount }
                setExpenses([...expenses, singleExpense])
                handleAlert({ type: "success", msg: "gider başarılı bir şekilde eklendi. " })
            }

            setCharge("")
            setAmount("")
        } else (
            handleAlert({ type: "danger", msg: "lütfen gider türü ve miktarını giriniz!!!" })
        )
    }

    // clear all
    const clearItems = () => {
        setExpenses([])
        handleAlert({ type: "danger", msg: "giderler temizlendi" })
    }
    // clear item
    const handleDelete = (id) => {
        let tempExpenses = expenses.filter(item => item.id !== id)
        setExpenses(tempExpenses)
        handleAlert({ type: "danger", msg: "gider silindi" })
    }
    // edit item
    const handleEdit = (id) => {
        let expense = expenses.find(item => item.id === id)
        let { charge, amount } = expense
        setCharge(charge)
        setAmount(amount)
        setEdit(true)
        setId(id)
    }


    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses))
    }, [expenses])

    return (
        <>
            <h1>Giderler</h1>
            {
                alert.show &&
                <Alert type={alert.type} msg={alert.msg} />
            }
            <Alert />
            <main className='expense-container'>

                <ExpenseForm
                    charge={charge}
                    amount={amount}
                    edit={edit}
                    handleAmount={handleAmount}
                    handleCharge={handleCharge}
                    handleSubmit={handleSubmit}
                />
                <ExpenseList
                    expenses={expenses}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    clearItems={clearItems}
                />
            </main>
            <h1>Toplam Gider: <span className='total'> {expenses.reduce((acc, curr) => {
                return acc += parseInt(curr.amount)
            }, 0)}₺ </span></h1>
        </>
    )
}

export default Expense