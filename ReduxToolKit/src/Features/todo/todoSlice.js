import { createSlice,nanoid } from "@reduxjs/toolkit";

//intialize state which is part of store 
const intialState = {
    todos : [{
        id:1,
        text:"my todos"
    }]
}

//intialize todo

export const todoSlice = createSlice({
     name : "todo",
     initialState,
     reducers:{
        addTodo :(state,action)=>{
            const newTodo = {
                id : nanoid(),
                text:action.payload
            }
           state.todos.push(newTodo);
        },
        removeTodo : (state,action)=>{
           state.todo = state.todos.filter((todo)=> todo.id != action.payload);
        }
        //update todo 
     }
})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer