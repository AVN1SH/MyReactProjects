import { useState } from "react";
import useTodo from "../contexts/TodoContext"
import { Todo } from "../contexts/TodoContext";
interface Props {
  oldTodo : Todo
}

const TodoList = ({oldTodo} : Props) => {
  const {updateTodo, deleteTodo, toggleComplete} = useTodo();
  const [newTodo, setNewTodo] = useState(oldTodo.todo);
  const [checkEditable, setCheckEditable] = useState(false);

  const handleEditOnClick = () => {
    setCheckEditable(!checkEditable);
    if(newTodo.length > 0) {
      updateTodo(oldTodo.id, newTodo);
    }
  }

  const handleDeleteOnClick = () => {
    deleteTodo(oldTodo.id);
  }

  const toggleCompleted = () => {
    toggleComplete(oldTodo.id);

  }
  return (
    <div>
      <input type="checkbox" 
        checked={oldTodo.complete}
        onChange={toggleCompleted}
      />
      <input 
        type="text"
        value={newTodo}
        readOnly={!checkEditable} 
        onChange={((e) => setNewTodo(e.target.value))}
      />      
      <button 
        onClick={handleEditOnClick}
        disabled={oldTodo.complete}
      > {checkEditable ? "🗃️" : "✏️"}
      
      </button>
      <button 
        onClick={handleDeleteOnClick}
      >❌</button>
    </div>
  )
}

export default TodoList
