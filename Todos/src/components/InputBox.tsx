import { useState, FormEvent } from "react";
import useTodo from "../contexts/TodoContext"

const InputBox = () => {
  const [todo, setTodo] = useState("");
  const {addTodo} = useTodo();

  const handleOnSubmit = (e : FormEvent) => {
    e.preventDefault();

    if(!todo) return;
    addTodo({id : Date.now(), todo : todo, complete : false})
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input 
          type = "text" 
          placeholder='Enter todo here..!'
          value = {todo}
          onChange={(e) => {setTodo(e.target.value)}}
        />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default InputBox
