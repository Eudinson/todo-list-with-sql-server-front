import { call, put } from 'redux-saga/effects';
import {
    requestGetTodos,
    requestDeleteTodos,
    requestAddTodos,
    requestUpdateTodos
} from '../requests/todos-request';
import {
    getTodosListResponse,
    deleteTodosResponse,
    addTodosResponse,
    updateTodosResponse
} from '../actions/todos-action';

export function* handleGetTodos() {
    try {
        const response = yield call(requestGetTodos)
        yield put(getTodosListResponse(response.data))
    } catch (error) {
        yield put(getTodosListResponse(error.message))
    }
}

export function* handleDeleteTodos(param) {
    try {
        const requestParam = { id: param.payload }
        const response = yield call(requestDeleteTodos, requestParam)
        yield put(deleteTodosResponse(response))
    } catch (error) {
        yield put(deleteTodosResponse(error.message))
    }
}

export function* handleAddTodos(param) {
    try {
        const requestParam = { todo: param.payload }
        const response = yield call(requestAddTodos, requestParam)
        yield put(addTodosResponse(response))
    } catch (error) {
        yield put(addTodosResponse(error.message))
    }
}

export function* handleupdateTodos(param) {
    try {
        const requestParam = param.payload 
        const response = yield call(requestUpdateTodos, requestParam)
        yield put(updateTodosResponse(response))
    } catch (error) {
        yield put(updateTodosResponse(error.message))
    }
}