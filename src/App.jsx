import TodoListTable from "./components/TodoListTable";
import TodoForm from "./components/TodoForm";
import { AppBar } from "@mui/material";
import './styles/App.css';

const App = () => {

  return (
    <div className="main-container">
      <AppBar
        className="app-bar"
        elevation={0}
      >
        <h1 className="heading">Todo App with SQL Server</h1>
      </AppBar>
      <div className="input-todo-container">
        <TodoForm />
      </div>
      <div className="table-container">
        <TodoListTable />
      </div>
    </div>
  );
}

export default App;