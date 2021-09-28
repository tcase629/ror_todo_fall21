import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, id, title, complete, updateTodo, setEdit }) => {
  const [todo, setTodo] = useState({ title: "", complete: false }) 
  
  useEffect( () => {
    if (id) {
      setTodo({ title, complete })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateTodo(id, todo)
      setEdit(false)
    } else {
      addTodo(todo)
    }
    setTodo({ title: "", complete: false })
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name="title"
          value={todo.title}
          onChange={(e) => setTodo({...todo, title: e.target.value})}

          required
          placeholder="Title"
        />
        <input 
          type="checkbox" 
          name="complete"
          value={todo.complete}
          onChange={(e) => setTodo({...todo, complete: e.target.value})}
          checked={todo.complete}
        />
        <button type="submit">Sumbit</button>
      </form>
    </>
  )
}

export default TodoForm