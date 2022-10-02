import { configureStore } from '@reduxjs/toolkit';
import  todosSlice  from './Features/TodoSlice'

export const store = configureStore({
  reducer: {
    todos: todosSlice 
  },
})