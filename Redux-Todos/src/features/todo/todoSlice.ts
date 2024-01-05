import {createSlice, nanoid} from "@reduxjs/toolkit";

export interface Todos {
  id : string;
  text : string;
}

export interface AppState {
  todos : Todos[]
}

const initialState : AppState = {
  todos : []
}


export const todoSlice = createSlice({
  name : "todo",
  initialState,
  reducers : {
    addTodo : (state : AppState, action) => {
      const todo : Todos = {
        id : nanoid(),
        text : action.payload
      }
      state.todos.push(todo);
    },
    removeTodo : (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;