import React, { useEffect, useState } from 'react'
import List from "./List"
import Alert from './Alert'
import "../../../styles/todo.scss"
const Todo = () => {


    const getLocalStorage = () => {
        let list = localStorage.getItem("list");
        if (list) {
            return JSON.parse(localStorage.getItem("list"))
        } else {
            return []
        }
    }

    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false)
    const [editId, setEditId] = useState(null)
    const [alert, setAlert] = useState({
        show: false,
        msg: "",
        type: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            //display alert

            showAlert(true, "danger", "Lütfen yapılacakları giriniz!")
        } else if (name && isEditing) {
            //deal with edit
            setList(list.map((item) => {
                if (item.id === editId) {
                    return { ...item, title: name, }
                }
                return item
            })
            )
            setName("")
            setEditId(null)
            setIsEditing(false)
            showAlert(true, "success", "öğe değiştirildi")
        } else {
            //show alert
            showAlert(true, "success", "Listeye eklendi. 🥰")
            const newItem = { id: new Date().getTime().toString(), title: name, done: false };
            setList([...list, newItem])
            setName("")
        }
    }

    const showAlert = (show = false, type = "", msg = "") => {
        setAlert({ show, type, msg })
    }

    const clearList = () => {
        showAlert(true, "danger", "liste temizlendi 😨")
        setList([])
    }
    const removeItem = (id) => {
        showAlert(true, "danger", "öğe silindi 😲")
        setList(list.filter((item) => item.id !== id))
    }

    const editItem = (id) => {
        const spesificItem = list.find((item) => item.id === id)
        setIsEditing(true)
        setEditId(id)
        setName(spesificItem.title)
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list))
    }, [list])

    return (
        <section className='section-center'>
            <div className='todo-container'>
                <form className='todo-form' onSubmit={handleSubmit}>
                    {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
                    <h3>Yapılacaklar Listesi</h3>
                    <div className='form-control'>
                        <input className='todo-input' type="text" placeholder='yapılacaklar...' value={name} onChange={(e) => setName(e.target.value)} />
                        <button type='submit' className='submit-btn'>
                            {isEditing ? "düzenle" : "kaydet"}
                        </button>
                    </div>
                </form>

                <List items={list} setList={setList} removeItem={removeItem} editItem={editItem} />
                <button className='clear-btn' onClick={clearList}>clear all</button>
            </div>
        </section>
    )
}

export default Todo