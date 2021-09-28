import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <>
      <ul>
        {
          todos.map( t => 
            <Todo {...t} 
              deleteTodo={deleteTodo} 
              updateTodo={updateTodo}
            />
          )
        }
      </ul>
    </>
  )
}

export default TodoList;