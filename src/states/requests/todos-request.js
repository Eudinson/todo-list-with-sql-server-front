import axios from "axios";
import urls from '../urls/urls';

const TodosApi = {

    get: (value) => {
        return axios.request({
            method: 'GET',
            url: urls.getTodos,
            value
        })
    },
    
    delete: (param) => {
        return axios.request({
            method: 'DELETE',
            url: urls.deleteTodos,
            data: param
        })
    },
    
    add: (param) => {
        return axios.request({
            method: 'POST',
            url: urls.addTodos,
            data: param
        })
    },
    
    update: (param) => {
        return axios.request({
            method: 'PUT',
            url: urls.updateTodos,
            data: param
        })
    }
}

export default TodosApi;
