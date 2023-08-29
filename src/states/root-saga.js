import TodosTypes from "./types/todos-types";
import { takeLatest, all } from "redux-saga/effects";
import TodosHandlers from "./handlers/todos-handler";

export function* rootSaga(){
    yield all([
        takeLatest(TodosTypes.GET_TODOS, TodosHandlers.getTodos),
        takeLatest(TodosTypes.DELETE_TODOS, TodosHandlers.deleteTodos),
        takeLatest(TodosTypes.ADD_TODOS, TodosHandlers.addTodos),
        takeLatest(TodosTypes.UPDATE_TODOS, TodosHandlers.updateTodos),
    ])
}
