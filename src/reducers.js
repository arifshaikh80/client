import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setTodos: (state, action) => {
      return action.payload;
    },
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo._id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    },
  },
});

export const { setTodos, addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
