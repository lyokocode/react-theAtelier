import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa"


const List = ({ setList, items, removeItem, editItem }) => {

    const toogleTodo = (todoKey) => {
        setList(items.map(item => {
            if (item.id === todoKey) {
                item.done = !item.done
            }
            return item
        }))
    }

    return (

        <div className='todo-list'>
            {items.map((item) => {
                const { id, title, done } = item
                return (
                    <article key={id} className="todo-item">

                        <p className='title'>
                            <span onClick={() => toogleTodo(id)} className={done ? "done" : ""}>
                                {title}
                            </span>
                        </p>

                        <div className='btn-container'>

                            <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                                <FaEdit />
                            </button>
                            <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
                                <FaTrash />
                            </button>

                        </div>
                    </article>
                )
            })}
        </div>
    )
}

export default List