import { useDispatch } from "react-redux";
import { setTodos, addTodo, deleteTodo, updateTodo } from "../Features/TodoSlice";
function TodoService(){
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const TODO_ROUTE = process.env.REACT_APP_TODO;
    const serverURL = SERVER_URL+'/'+TODO_ROUTE;
    const dispatch= useDispatch();

    const getItems =(()=>{
        return fetch(serverURL)
        .then(response =>  response.json())
        .catch(error=>{
            alert(error);
        })
        .then(data => dispatch(setTodos(data))); 
    })
    const postItem = ((item) => {
        fetch(serverURL , {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(item)
        })
        .then((response) => {
            if(response.ok){
                dispatch(addTodo(item));
            }
            else{
                alert('Post problem!')
            }
        })
       
    })
    const putItem = (item) => {
        fetch(serverURL+ "/"+ item.id , {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(item)
        })
        .then((response) => {
            if(response.ok){
                console.log("dispatching")
                dispatch(updateTodo(item))
            }
            else{alert('PUT Problem!')}
        })
        
    }
    const deleteItem = (id)=>{
        fetch(serverURL+'/'+id, { method: 'DELETE' })
        .then(dispatch(deleteTodo(id)));
    }
    const getItemById =((id)=>{
        return fetch(serverURL+'/'+id)
        .then(response =>  response.json())
        .catch(error=>{
            alert(error);
        }) 
    })
    return{
        getItems:getItems,
        deleteItem:deleteItem,
        getItemById:getItemById,
        postItem:postItem,
        putItem: putItem
    }
}
export default TodoService;