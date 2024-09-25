import React, {useState} from "react"
import axios from "axios"

import "./index.css"

const TodoForm = (props) =>{
    const {setTodos,todos} = props;

    const initialState = {
        id:"",
        description:""
    }

    const [todo, setTodo] = useState(initialState);

    const onHandleChange = (event) =>{
        setTodo({id: Date.now(), description:event.target.value});
       
    }

    const onHandleSubmit = (event) =>{
        event.preventDefault();
        setTodos([todo, ...todos]);
        axios.post('https://assessment-drive-todo-backend-1.onrender.com/todos', todo)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        setTodo(initialState)

    }

    return(
    <div className="todo-form-container">
        <h1 className="heading">TODO LIST</h1>
        <form onSubmit={onHandleSubmit} className="form-container">
            <input type="text" name="todo" className="input-element" value={todo.description} placeholder="Enter a task" onChange={onHandleChange}/>
            <button type="submit">Add Task</button>
        </form>
    </div>
)
}

export default  TodoForm