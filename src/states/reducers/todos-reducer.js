import TodosTypes from "../types/todos-types";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    todosList: [],
    deleteTodosResponse: '',
    addTodosResponse: '',
    updateTodosResponse: '',
}

const todosReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(TodosTypes.GET_TODOS_RESPONSE, (state, action) => {
        state.todosList = action.payload
    })
    .addCase(TodosTypes.DELETE_TODOS_RESPONSE, (state, action) => {
        state.deleteTodosResponse = action.payload
    })
    .addCase(TodosTypes.ADD_TODOS_RESPONSE, (state, action) => {
        state.addTodosResponse = action.payload
    })
    .addCase(TodosTypes.UPDATE_TODOS_RESPONSE, (state, action) => {
        state.updateTodosResponse = action.payload
    })
})

export default todosReducer;