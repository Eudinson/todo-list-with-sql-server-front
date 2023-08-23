import TodosTypes from "./types/todos-types";
import { takeLatest, all } from "redux-saga/effects";
import { 
    handleGetTodos,
    handleDeleteTodos,
    handleAddTodos
} from "./handlers/todos-handler";

export function* rootSaga(){
    yield all([
        takeLatest(TodosTypes.GET_TODO_LIST, handleGetTodos),
        takeLatest(TodosTypes.DELETE_TODOS, handleDeleteTodos),
        takeLatest(TodosTypes.ADD_TODOS, handleAddTodos),
    ])
}
