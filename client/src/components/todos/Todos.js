import { useState, useEffect } from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import TodoForm from './TodoForm'
const Todos = () => {
  const [todos, setTodos] = useState([])

  // before it mounts 
  useEffect( () => {
    // grab the todos from the db
    axios.get('/api/todos')
      .then( res => {
        // and set it to state
        setTodos(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  // add todo
  const addTodo = (todo) => {
    // add in the db
    // add in the state in the client 
    //  { todo: {title: "", complete: false}}
    axios.post('/api/todos', { todo })
      .then( res => {
        setTodos([...todos, res.data])
      })
      .catch( err => console.log(err))
  }

  // update todo
  const updateTodo = (id, todo) => {
    // update in the db
    //  { todo: {title: "", complete: false}}
    axios.put(`/api/todos/${id}`, { todo })
      .then( res => {
        // update in the state in the client 
        const updatedTodos = todos.map( t => {
          if (t.id === id) {
            return res.data
          }
          return t
        })
        setTodos(updatedTodos)
      })
      .catch( err => console.log(err))
  }


  // delete todo 
  const deleteTodo = (id) => {
    // delete in the db
    axios.delete(`/api/todos/${id}`)
      .then( res => {
        // delete in the state in the client 
        setTodos(todos.filter( t => t.id !== id))
      })
      .catch( err => console.log(err))
  }

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </>
  )
}

export default Todos;