import { useState } from "react";
import TodoService from "../Services/TodoService";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TodoItem(props) {

    const [todoItem, setTodoItem] = useState({ ...props.todo })
    const todoService = TodoService();
    const doneChanged = () => {
        let copy = { ...todoItem }
        copy.done = !todoItem.done;
        setTodoItem(copy);
        console.log(copy.done);
        todoService.putItem(copy);
    }

    const deleteItem = () => {
        alert(todoItem.title+" task will deleted");
        todoService.deleteItem(todoItem.id);
    }
    const bgStyle = {
        backgroundColor: 'yellow'
    }

    return (
        <div   style={todoItem.done ? bgStyle : null}>
            <Card style={{ width: '18rem'  }}>
                <Card.Body >
                    <Card.Title>{todoItem.title}</Card.Title>
                    <Card.Text>
                        <p>{todoItem.description}</p>
                        <label>Done</label><input type="checkbox" checked={todoItem.done} name="done" onChange={() => doneChanged()} />
                        <p>{todoItem.date}</p>
                    </Card.Text>
                    <Button variant="danger" onClick={deleteItem}>Delete</Button>
                    {todoItem.done && <Button variant="warning" onClick={() => doneChanged()}>Undone</Button>}
                </Card.Body>
            </Card>
        </div>


    )

}
export default TodoItem;