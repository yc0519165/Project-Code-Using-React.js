import { useContext } from "react";
import TodoItem from "./TodoItem"
import WelcomeMessage from './WelcomeMessage'
import { TodoListContext } from "../store/todo-item-store";


const TodoItems = () => {

  const { todoItems } = useContext(TodoListContext);
  const {handleDeleteItem} = useContext(TodoListContext)
  const { reSetApp } = useContext(TodoListContext)
  
  return (
    <>
    <div className="item-container">
    <div className="row">
    {todoItems.map((item) =>(
      <TodoItem key={item.name} todoDate={item.dueDate} todoName={item.name} onDeleteClick={handleDeleteItem} ></TodoItem>
    ))}
    <button type="button" className="item0-btn btn btn-success button" 
    onClick={() => {reSetApp("todo")}}>Todo</button>
    </div>
    <WelcomeMessage></WelcomeMessage>
    </div>

    </>
  )
}
export default TodoItems;