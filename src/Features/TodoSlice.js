import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
name: "todos",
initialState : {value: []},
reducers: {
    setTodos: (state,action) => {
        return {...state,value:[...action.payload]}
    },
   addTodo: (state, action) => {
        state.value.push(action.payload);
    },
    deleteTodo: (state,action) => {
     return{value: [...state.value.filter(item => item.id != action.payload)]};      
    },
    updateTodo: (state,action) => {
      const index = state.value.findIndex((item) => item.id == action.payload.id);
      const newArr = [...state.value];
      newArr[index] = action.payload;
      return{ value: newArr};
    }
}
})

export const {addTodo, setTodos, deleteTodo, updateTodo} = todosSlice.actions;

export default todosSlice.reducer;