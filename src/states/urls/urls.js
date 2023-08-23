const host = 'localhost';
const port = 7000;
const server = `http://${host}:${port}`

const urls = {
    getTodos: `${server}/todos/get-todos`,
    addTodos: `${server}/todos/add-todos`,
    updateTodos: `${server}/todos/update-todos`,
    deleteTodos: `${server}/todos/delete-todos`
}

export default urls;