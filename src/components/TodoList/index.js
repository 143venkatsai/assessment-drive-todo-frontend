import React from "react"
import Todo from "../Todo"

const TodoList = (props) =>{
    const {todos, deleteTodo,updateTodo} = props
    return(
    <div>
        {
            todos.map(todo=>(
                <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
            ))
        }
    </div>
)
}

export default TodoList