import React, { useState } from 'react'

const Addtodo = ({todos, setTodos}) => {

  const [todoname, setTodoName] = useState()
  const addtodos = () =>{
    if(todoname !==""){
      setTodos([...todos, {id:todos.length+1, name:todoname, status:false}])
      setTodoName("")
    } else{
      alert('please Enter name')
    }
  
  }
  return (
   <>
   <div className='bg-white p-2 w-full'>
    <h className='text-xl text-green-500 font-bold'> Add Todo</h> <p></p>
    <label> Enter Todo Task:</label>
    <input onChange={(events)=> setTodoName(events.target.value)} value={todoname} type='text' className='p-2 bg-slate-100 w-full mt-2' placeholder='Enter Todo'/>
    <button onClick={() => addtodos()} className='p-2 bg-green-500 text-white mt-3 w-full'> Add todo</button>
   </div>
   </>
  )
}

export default Addtodo
