import { useState } from 'react';
import TodoForm from './TodoForm';
import Comments from '../comments/Comments'
const Todo = ({ id, title, complete, deleteTodo, updateTodo }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <li>
        {title}
        <br />
        Complete: { complete ? "Yes" : "No" }
        {
          editing ?
          <>
            <TodoForm
              id={id}
              title={title}
              complete={complete}
              updateTodo={updateTodo}
              setEdit={setEdit}
            />
          </>
          :
          <button onClick={() => setEdit(true)}>Edit</button>
        }
        <button onClick={() => deleteTodo(id)}>Delete</button>
      </li>
      <Comments todoId={id} />
    </>
  )
}

export default Todo;