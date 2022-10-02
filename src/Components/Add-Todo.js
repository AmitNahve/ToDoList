import { useState } from "react";
import TodoService from "../Services/TodoService";

function AddTodo(){

    const todoService = TodoService();

    const [todo , setTodo] = useState({
        "title": "",
        "description": "",
        "done": false,
        "date": "yyyy/MM/dd"
    })

    const change =(e) => {
        let copy = {...todo};
        copy[e.target.name] = e.target.value;
        setTodo(copy);
        console.log(todo);
    }
    const saveTodo =() => {
        alert("task will add to the list");
        todoService.postItem(todo);
    }

    return (<div>
        <h2>Add new</h2>
        <label>Title: <input type="text" name="title" value={todo.title} onChange={(e) =>change(e)} /></label>
        <label>Description: <input type="text" name="description" value={todo.description} onChange={(e) =>change(e)} /></label>
        <label>Date: <input type="date" name="date" value={todo.Date} onChange={(e) =>change(e)} /></label>
        <button onClick={() =>saveTodo()}>Save</button>
    </div>)
}
export default AddTodo;