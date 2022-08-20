import React from 'react'
import "styles/expense.scss"
import ExpenseList from './ExpenseList'
import ExpenseForm from './ExpenseForm'
import Alert from '../../Alert/Alert'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'

const initialExpenses = [
    {
        id: uuidv4(),
        charge: "market",
        amount: 600
    }, {
        id: uuidv4(),
        charge: "manav",
        amount: 500
    }, {
        id: uuidv4(),
        charge: "ambalaj",
        amount: 600
    }, {
        id: uuidv4(),
        charge: "çikolata",
        amount: 3000
    }
]
console.log(initialExpenses)

const Expense = () => {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [charge, setCharge] = useState("");
    const [amount, setAmount] = useState("");
    const [alert, setAlert] = useState({ show: false });


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
            const singleExpense = { id: uuidv4(), charge, amount }
            setExpenses([...expenses, singleExpense])
            handleAlert({ type: "success", msg: "gider başarılı bir şekilde eklendi. " })
            setCharge("")
            setAmount("")
        } else (
            handleAlert({ type: "danger", msg: "lütfen gider türü ve miktarını giriniz!!!" })
        )
    }

    return (
        <>
            <h1>Giderler</h1>
            {
                alert.show &&
                <Alert type={alert.type} msg={alert.msg} />
            }
            <main className='expense-container'>

                <ExpenseForm
                    charge={charge}
                    amount={amount}
                    handleAmount={handleAmount}
                    handleCharge={handleCharge}
                    handleSubmit={handleSubmit}
                />
                <ExpenseList expenses={expenses} />
            </main>
            <h1>Toplam Gider: <span className='total'> {expenses.reduce((acc, curr) => {
                return acc += parseInt(curr.amount)
            }, 0)}₺ </span></h1>
        </>
    )
}

export default Expense