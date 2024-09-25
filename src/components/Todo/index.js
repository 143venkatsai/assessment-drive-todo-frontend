import React, {useState} from "react"
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";


import "./index.css"

const Todo = (props) =>{
    const {todo, deleteTodo, updateTodo} = props
    const {id, description} = todo

    const [editTodo, setEditTodo] = useState(false);
    const [upadtedTodo, setUpdatedTodo] = useState("");
    
    const onClickDeleteTodo = () =>{
        deleteTodo(id)
    }

    const updateAndReset = (input, event) =>{
        event.preventDefault();
        updateTodo(input);
        setEditTodo(false)
    }

    const updateTodoState = (event) =>{
        setUpdatedTodo({
            id: id,
            description: event.target.value
        })
    }

    return (
        <div className="todo-item">
            {editTodo ? (
                <form onSubmit={(event) =>updateAndReset(upadtedTodo, event)}>
                    <input type="text" defaultValue={description} onChange={updateTodoState} className="item" />
                </form>
            ):(
                <li>{description}</li>
            )}
            <div>
            <button type="button" className="delete-btn" onClick={onClickDeleteTodo}><MdDelete className="icon" /></button>
            <button type="button" className="edit-btn" onClick={() => setEditTodo(true)}><MdEdit className="icon-edit" /></button>
            </div>
        </div>
    )
}

export default Todo