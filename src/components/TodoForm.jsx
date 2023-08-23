import { TextField, Button } from "@mui/material";
import { useState, useEffect } from "react";
import '../styles/todoForm.css';

import { getTodosList } from "../states/actions/todos-action";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../states/actions/todos-action";

const TodoForm = () => {

    const dispatch = useDispatch()
    const [inputTodo, setInputTodo] = useState('')
    const addTodosResponse = useSelector(state => state.todos.addTodosResponse)

    useEffect(() => {
        let isMounted = true;
    
        dispatch(getTodosList());
    
        return () => {
          isMounted = false;
        }
      }, [addTodosResponse])

    const handleChange = (e) => {
        const  { value } = e.target;
        setInputTodo(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodos(inputTodo))
        setInputTodo('')
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <TextField
                id="outlined-basic"
                label="What to do?"
                variant="outlined"
                size="small"
                fullWidth
                onChange={handleChange}
                value={inputTodo}
                type="text"
                required
            />
            <Button
                variant="contained"
                fullWidth
                type="submit"
            >
                Add to do
            </Button>
        </form>
    );
}

export default TodoForm;