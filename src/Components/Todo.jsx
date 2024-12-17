import React from 'react'
import './Todo.css'
import { useState , useRef , useEffect } from 'react'
import { IoMdDoneAll } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';



function Todo() {
  const[todo,setTodo] = useState('');
  const[todos,setTodos] = useState([]);
  const [editId , setEditId] = useState(0);


  const handleSubmit = (e)=>{
    e.prevevtDefault();
  }


  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, {list : todo , id : Date.now() , status : false }]);
      setTodo('');
    }
    if(editId){
      const editTodo = todos.find((todo) => todo.id == editId);
      const updateTodo = todos.map((to) => to.id == editTodo.id
      ? (to = {id : to.id , list : todo})
      : (to = {id : to.id , list : to.list}))
      setTodos(updateTodo);
      setEditId(0);
      setTodo('');
    }
  };

  const inputRef = useRef('null')

  useEffect(()=>{
    inputRef.current.focus()
  });

  const onDelete = (id) => {
    setTodos(todos.filter((to) => to.id !== id))
  }

  const onComplete = (id) => {
    let complete = todos.map((list)=>{
      if(list.id===id){
        return({...list , status :!list.status })
      }
      return list
    })
    setTodos(complete)
  }

  const onEdit = (id) => {
    const editTodo = todos.find((to)=> to.id === id);
    setTodo(editTodo.list);
    setEditId (editTodo.id);
  }

  return (
    <div className='container'>
      <div className='container-section'>
      <h2>TODO APP</h2>
      <br/>
      <form className='form-gruop' onSubmit={handleSubmit}>
        <input type='text' value={todo} ref={inputRef} placeholder='Enter Your ToDo' className='form-control' onChange={(event)=>setTodo(event.target.value)} />
        <button type='button' onClick={addTodo}>{editId ? 'EDIT' : 'ADD' }</button>
      </form>
      <div className='list'>
        <ul>
          {
            todos.map((todo)=>(
              <li className='list-items' >

                <div className='list-item-list' id= {todo.status ? 'list-item' : ''} >{todo.list}</div>

                <span>
                  <IoMdDoneAll className='list-item-icons' id='complete' title='Complete' onClick={()=>onComplete(todo.id)} />
                  <FiEdit className='list-item-icons' id='edit' title='Edit' onClick={()=> onEdit(todo.id)} />
                  <MdDelete className='list-item-icons' id='delete' title='Delete' onClick={()=>onDelete(todo.id)} />
                </span>

              </li>
            ))
          }
        </ul>
      </div>
      </div>
    </div>
  )
}


//-------------------------- npm run dev

export default Todo