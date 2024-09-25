import React, {useState, useEffect} from "react"
import axios from "axios"

import TodosList from "./components/TodoList"
import TodoForm from "./components/TodoForm"

import "./App.css"

const App = () =>{
  const [todoList, setTodoList] = useState([]);
  console.log(todoList)

  useEffect(()=>{
    axios.get('https://assessment-drive-todo-backend-1.onrender.com/todos',{})
     .then(res =>{
      console.log(res);
      setTodoList(res.Array);
     })
     .catch(err =>{
      console.log(err);
     })
  },[])

  const deleteTodo = (id) =>{
    axios.delete(`https://assessment-drive-todo-backend-1.onrender.com/todos/${id}`)   
    .then(res =>{
      console.log(res);
      const newTodos = todoList.filter(item =>item.id !== id);
      setTodoList(newTodos)
    })
    .catch(err =>{
      console.log(err);
    })
  }

  const updateTodo = (todo) =>{
    
    axios.put(`https://assessment-drive-todo-backend-1.onrender.com/todos/${todo.id}`, todo)   
    .then(res =>{
      console.log(res);
      setTodoList(todoList.map(item =>{
        if(item.id === todo.id){
          return{
            ...item,
            description:todo.description
          }
        }else{
          return item
        }
      }))
    })
    .catch(err =>{
      console.log(err);
    })
  }

  return(
  <div className="app-container">
    <TodoForm todos={todoList} setTodos={setTodoList} />
    <TodosList todos={todoList} deleteTodo={deleteTodo} updateTodo={updateTodo} />
  </div>
)
}
export default App
