import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
    Tooltip,
    TextField
} from "@mui/material";
import '../styles/todoListTable.css';
import {
    EditOutlined,
    DeleteOutline,
    SaveOutlined,
    CancelOutlined
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TodosActions from "../states/actions/todos-action";

const TodoListTable = () => {

    const dispatch = useDispatch()
    const todosList = useSelector(state => state.todos.todosList)
    const deleteTodosResponse = useSelector(state => state.todos.deleteTodosResponse)
    const updateTodosResponse = useSelector(state => state.todos.updateTodosResponse)

    useEffect(() => {
        dispatch(TodosActions.getTodos())
    }, [deleteTodosResponse, updateTodosResponse])

    const [todoId, setTodoId] = useState(null);
    const [editValue, setEditValue] = useState('')

    const handleDelete = (id) => {
        dispatch(TodosActions.deleteTodos(id))
    }

    const handleEdit = (id) => {
        setTodoId(id)
        const editInputValue = todosList.filter(data => data.id === id).map(data => data.todo)[0]
        setEditValue(editInputValue)
    }

    const handleUpdate = (id) => {
        const editedValue = {
            id: id,
            todo: editValue
        }
        dispatch(TodosActions.updateTodos(editedValue))
        setTodoId(null)
    }

    const handleCancel = () => {
        setTodoId(null)
    }

    const handleEditChange = (e) => {
        const { value } = e.target;
        setEditValue(value)
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="table-heading">ID</TableCell>
                            <TableCell className="table-heading">Todos</TableCell>
                            <TableCell className="table-heading">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            todosList.map((data) => (
                                <TableRow key={data.id}>
                                    {
                                        data.id === todoId
                                            ?
                                            <>
                                                <TableCell sx={{ width: '300px' }}>{data.id}</TableCell>
                                                <TableCell sx={{ width: '80%' }}>
                                                    <TextField
                                                        id="outlined-basic"
                                                        label="update todo"
                                                        variant="outlined"
                                                        size="small"
                                                        fullWidth
                                                        onChange={handleEditChange}
                                                        value={editValue}
                                                        type="text"
                                                        required
                                                    />
                                                </TableCell>
                                                <TableCell sx={{ width: '100px' }}>
                                                    <Tooltip title='update' placement="left">
                                                        <IconButton
                                                            aria-label="update"
                                                            className="icon-wrapper"
                                                            onClick={() => handleUpdate(data.id)}
                                                        >
                                                            <SaveOutlined className="icon" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title='cancel' placement="right">
                                                        <IconButton
                                                            aria-label="cancel"
                                                            className="icon-wrapper"
                                                            onClick={handleCancel}
                                                        >
                                                            <CancelOutlined className="icon" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </>
                                            :
                                            <>
                                                <TableCell sx={{ width: '300px' }}>{data.id}</TableCell>
                                                <TableCell sx={{ width: '80%' }}>{data.todo}</TableCell>
                                                <TableCell sx={{ width: '100px' }}>
                                                    <Tooltip title='edit' placement="left">
                                                        <IconButton
                                                            aria-label="edit"
                                                            className="icon-wrapper"
                                                            onClick={() => handleEdit(data.id)}
                                                        >
                                                            <EditOutlined className="icon" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title='delete' placement="right">
                                                        <IconButton
                                                            aria-label="delete"
                                                            className="icon-wrapper"
                                                            onClick={() => handleDelete(data.id)}
                                                        >
                                                            <DeleteOutline className="icon" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </TableCell>
                                            </>
                                    }
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default TodoListTable;