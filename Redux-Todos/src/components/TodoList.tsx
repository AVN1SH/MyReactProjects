import {useSelector, useDispatch} from "react-redux";
import { removeTodo, AppState, Todos} from "../features/todo/todoSlice";


const TodoList = () => {
  const TodoList = useSelector((state : AppState) => state.todos)
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {TodoList.map((todo) => <li key={todo.id}>{todo.text}<button onClick={() => dispatch(removeTodo(todo.id))}>❌</button></li>)}
      </ul>
    </div>
  )
}

export default TodoList
