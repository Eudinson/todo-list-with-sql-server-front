import TodosTypes from "../types/todos-types";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    todosList: [],
    deleteTodosResponse: '',
    addTodosResponse: '',
}

const todosReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(TodosTypes.GET_TODO_LIST_RESPONSE, (state, action) => {
        state.todosList = action.payload
    })
    .addCase(TodosTypes.DELETE_TODOS_RESPONSE, (state, action) => {
        state.deleteTodosResponse = action.payload
    })
    .addCase(TodosTypes.ADD_TODOS_RESPONSE, (state, action) => {
        state.addTodosResponse = action.payload
    })
})

export default todosReducer;