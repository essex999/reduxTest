import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    filter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setCompleted: (state, action) => {
      const todoId = action.payload;
      const todoToUpdate = state.todos.find((todo) => todo.id === todoId);

      if (todoToUpdate.completed === false) {
        todoToUpdate.completed = true;
      } else {
        todoToUpdate.completed = false;
      }
    },
  },
});

export const { addTodo, deleteTodo, setFilter, setCompleted } =
  todoSlice.actions;
export default todoSlice.reducer;
