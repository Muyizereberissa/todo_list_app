import React from 'react'

const ViewTodo = ({todos, setTodos}) => {

  const DeleteTodo = (id) =>{
    const new_data = todos.filter(todos => todos.id !== id)
    setTodos(new_data)
  }

  const MarkasComplete = (id) =>{
    const new_data = todos.map( todos =>{
      if(todos.id === id){
        return {
          ...todos,
          status:!todos.status
        }
      }
      return todos

    })
    setTodos(new_data)
  }
  return (
   <>
   <div className="columns-3 bg-blue-200 p-2">
    <p className="font-bold text-white"> Todo Name</p>
    <p className="font-bold text-white">Todo Status</p>
    <p className="font-bold text-white">Todo Actions</p>
    <p className="font-bold text-white"></p>
   </div>
   {todos.map((todos, index)=>(
      <div className="columns-3 bg-blue-400 p-2">
      <p className="font-bold text-green-600"> {todos.name}</p>
      <p className="font-bold text-green-600">{todos.status ? 'Completed': 'Not done'}</p>
      <p className="font-bold text-green-600">
        <div className='flex gap-2 justify-end'>
        <button  onClick={()=> DeleteTodo(todos.id)} className='bg-red-500 text-xs text-white rounded-full p-1 '>delete</button>
        <button onClick={()=> MarkasComplete(todos.id)} className='bg-green-500 text-xs text-white rounded-full p-1 '>done</button>
        </div>
      </p>
     </div>
   )
    )}


   </>
  )
}

export default ViewTodo
