import React from 'react'
import ExpenseItem from "./ExpenseItem"
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({ expenses }) => {
    return (
        <>
            <ul className='list'>
                {expenses.map((expense) => {
                    return <ExpenseItem key={expense.id} expense={expense} />
                })}
            </ul>
            {expenses.length > 0 &&
                <button className='btn'>
                    tümünü sil
                    <MdDelete />
                </button>
            }
        </>
    )
}

export default ExpenseList