import { createContext, useContext } from "react";

export interface Todo{
  id : number;
  todo : string;
  complete : boolean;
}
export const TodoContext = createContext({
  todos : [{}],
  addTodo : (todo : Todo) => {},
  updateTodo : (id : number, newTodo : string) => {},
  deleteTodo : (id : number) => {},
  toggleComplete : (id : number) => {}
})

export const TodoProvider = TodoContext.Provider;

const useTodo = () => {
  return useContext(TodoContext);
}

export default useTodo;