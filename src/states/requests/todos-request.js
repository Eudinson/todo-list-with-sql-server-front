import axios from "axios";
import urls from '../urls/urls';

export const requestGetTodos = (value) => {
    return axios.request({
        method: 'GET',
        url: urls.getTodos,
        value
    })
}

export const requestDeleteTodos = (param) => {
    return axios.request({
        method: 'DELETE',
        url: urls.deleteTodos,
        data: param
    })
}

export const requestAddTodos = (param) => {
    return axios.request({
        method: 'POST',
        url: urls.addTodos,
        data: param
    })
}