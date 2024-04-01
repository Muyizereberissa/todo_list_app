import NavBar from "./todo/NavBar"
import Addtodo from "./assets/Addtodo"
import ViewTodo from "./ViewTodo"
import { useEffect, useState } from "react"

function App() {
 
const [todos, setTodos] = useState([])
  
console.table(todos)
  return (
    <>
    <NavBar></NavBar>
    <div className="flex gap-2 w-4/6 m-auto mt-32 max-lg:w-11/12 max-md:flex-wrap">
      <div className="w-full">
      <Addtodo todos={todos} setTodos={setTodos}></Addtodo>
      </div>
      <div className="w-full">
      <ViewTodo todos={todos} setTodos={setTodos} ></ViewTodo>
      </div>
    </div>
    </>
  )
}

export default App
