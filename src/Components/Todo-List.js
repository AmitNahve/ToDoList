import { useEffect } from "react";
import TodoItem from "./Todo-Item";
import { useSelector} from "react-redux";
import TodoService from "../Services/TodoService";


function TodoList(){
    const todos = useSelector(state => state.todos.value);
    const todoService  = TodoService();
    useEffect(() => {
        todoService.getItems()
    },[])

    return ( 
        <div  style={{padding:10 }}>
            {todos.map(todo => <div key={todo.id}> <TodoItem todo ={todo}/> </div>)}
        </div>
    )

}
export default TodoList;