import TodosTypes from "../types/todos-types";
import { createAction } from "@reduxjs/toolkit";

export const getTodosList = createAction(TodosTypes.GET_TODO_LIST);
export const getTodosListResponse = createAction(TodosTypes.GET_TODO_LIST_RESPONSE);

export const deleteTodos = createAction(TodosTypes.DELETE_TODOS);
export const deleteTodosResponse = createAction(TodosTypes.DELETE_TODOS_RESPONSE);

export const addTodos = createAction(TodosTypes.ADD_TODOS);
export const addTodosResponse = createAction(TodosTypes.ADD_TODOS_RESPONSE);
