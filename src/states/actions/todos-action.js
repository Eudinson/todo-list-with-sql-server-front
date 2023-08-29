import TodosTypes from "../types/todos-types";
import { createAction } from "@reduxjs/toolkit";

const TodosActions = {
    
    getTodos: createAction(TodosTypes.GET_TODOS),
    getTodosResponse: createAction(TodosTypes.GET_TODOS_RESPONSE),

    deleteTodos: createAction(TodosTypes.DELETE_TODOS),
    deleteTodosReponse: createAction(TodosTypes.DELETE_TODOS_RESPONSE),

    addTodos: createAction(TodosTypes.ADD_TODOS),
    addTodosResponse: createAction(TodosTypes.ADD_TODOS_RESPONSE),

    updateTodos: createAction(TodosTypes.UPDATE_TODOS),
    updateTodosResponse: createAction(TodosTypes.UPDATE_TODOS_RESPONSE),
    
}

export default TodosActions;

