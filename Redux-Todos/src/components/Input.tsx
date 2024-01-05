import {useState} from "react";
import {FormEvent} from "react"
import { useDispatch } from "react-redux";
import {addTodo} from "../features/todo/todoSlice"
const Input = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const dispatch = useDispatch()

  const handleFormOnSubmit = (e : FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(currentTodo));
    setCurrentTodo("");
  }
  return (
    <div>
      <form onSubmit={handleFormOnSubmit}>
        <input
          type='text'
          placeholder='Enter Todo Here...'
          onChange={(e) => setCurrentTodo(e.target.value)}
          value={currentTodo}
        />
        <button type="submit" >add</button>
      </form>
    </div>
  )
}

export default Input
