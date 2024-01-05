import { useEffect, useState } from "react";
import InputBox from "./components/InputBox";
import { TodoProvider, Todo} from "./contexts/TodoContext.ts";
import TodoList from "./components/TodoList.tsx";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo : Todo) => {
    setTodos((prev) => [todo, ...prev])
  }

  const updateTodo = (id : number , newTodo : string) => {
    setTodos((prev) => prev.map((prevTodo => (prevTodo.id === id ? {...prevTodo, todo : newTodo} : prevTodo))))
  }

  const deleteTodo = (id : number) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id));
  }

  const toggleComplete = (id : number) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, complete : !prevTodo.complete} : prevTodo ))
  }

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    console.log("reached");
    if(localTodos !== null) {
      setTodos(JSON.parse(localTodos));
      console.log(todos);
    }

  }, [])

  useEffect(() => {
    console.log("setItem");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div>
        <InputBox/>
        {todos.map((todo) => (<TodoList key={todo.id} oldTodo={todo} />))}
      </div>
    </TodoProvider>
  )
}

export default App;
