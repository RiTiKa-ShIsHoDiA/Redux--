import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Features/todo/todoSlice";

export const store = configureStore({
    reducer : todoSlice
}); //create store using configureStore it take object