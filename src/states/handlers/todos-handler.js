import { call, put } from 'redux-saga/effects';
import TodosApi from '../requests/todos-request';
import TodosActions from '../actions/todos-action';

const TodosHandlers = {

    getTodos: function* () {
        try {
            const response = yield call(TodosApi.get)
            yield put(TodosActions.getTodosResponse(response.data))
        } catch (error) {
            yield put(TodosActions.getTodosResponse(error.message))
        }
    },
    
    deleteTodos: function* (param) {
        try {
            const requestParam = { id: param.payload }
            const response = yield call(TodosApi.delete, requestParam)
            yield put(TodosActions.deleteTodosReponse(response))
        } catch (error) {
            yield put(TodosActions.deleteTodosReponse(error.message))
        }
    },
    
    addTodos: function* (param) {
        try {
            const requestParam = { todo: param.payload }
            const response = yield call(TodosApi.add, requestParam)
            yield put(TodosActions.addTodosResponse(response))
        } catch (error) {
            yield put(TodosActions.addTodosResponse(error.message))
        }
    },
    
    updateTodos: function* (param) {
        try {
            const requestParam = param.payload
            const response = yield call(TodosApi.update, requestParam)
            yield put(TodosActions.updateTodosResponse(response))
        } catch (error) {
            yield put(TodosActions.updateTodosResponse(error.message))
        }
    }
}

export default TodosHandlers;