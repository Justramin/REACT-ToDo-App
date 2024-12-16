import React from 'react'
import './Todo.css'

function Todo() {
  return (
    <div className='container'>
      <h2>TODO APP</h2>
      <form>
        <input type='text' placeholder='Enter Your ToDo'></input>
        <button>ADD</button>
      </form>
      <div>
        <ul>
          <li>First</li>
          <li>Second</li>
          <li>Theard</li>
        </ul>
      </div>
    </div>
  )
}

export default Todo